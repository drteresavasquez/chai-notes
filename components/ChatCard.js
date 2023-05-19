import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ChatCard({ input, response }) {
  return (
    <Card className="m-1">
      <Card.Header>{input}</Card.Header>
      <Card.Body>
        <Card.Text>
          {response}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ChatCard.propTypes = {
  input: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
};

export default ChatCard;
