import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { postChat } from '../api/firebaseCalls';

function ChatCard({ input, response, primary }) {
  const [disabled, setDisabled] = useState(false);

  const { user } = useAuth();

  const handleClick = () => {
    postChat({ input, response, uid: user.uid }).then(() => {
      setDisabled(true);
    });
  };

  return (
    <Card className="m-1">
      <Card.Header>{input}</Card.Header>
      <Card.Body>
        <Card.Text>
          {response}
        </Card.Text>
        {
          !disabled && primary ? <Button variant="success" onClick={handleClick}>Save</Button> : null
        }
      </Card.Body>
    </Card>
  );
}

ChatCard.propTypes = {
  input: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

ChatCard.defaultProps = {
  primary: false,
};

export default ChatCard;
