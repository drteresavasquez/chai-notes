import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ChatCard from '../components/ChatCard';
import PulsatingCard from '../components/PulsatingCard';
import askChatGpt from '../api/chatGpt';

import '../styles/globals.css';

export default function App() {
  const [formInput, setFormInput] = useState('');
  const [inputResponse, setInputResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // user enters prompt into text field
  // capture text, send to API, wait on response
  // after response, update state (add response to end of array)
  // also capture user input in state (for now...)
  // show content on the DOM

  const handleChange = (e) => {
    const { value } = e.target;
    setFormInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    askChatGpt(formInput).then((resp) => {
      const ir = {
        id: resp.id,
        input: formInput,
        response: resp.choices[0].message.content,
      };
      setInputResponse((prevState) => [ir, ...prevState]);
      setFormInput('');
      setIsLoading(false);
    });
  };

  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Gimme a Prompt"
        >
          <Form.Control
            type="text"
            placeholder="Gimme a Prompt"
            value={formInput}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </FloatingLabel>
      </Form>
      {
        isLoading ? (
          <PulsatingCard />
        ) : null
      }
      {
        inputResponse.map((item) => <ChatCard key={item.id} input={item.input} response={item.response} />)
      }
    </div>
  );
}
