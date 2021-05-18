import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

function LobbyForm({ onIdSubmit }) {
  const idRef = useRef();

  const submitCode = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Form className='w-100' onSubmit={submitCode}>
      <Form.Group>
        <Form.Label> Enter Game ID</Form.Label>
        <Form.Control type='text' ref={idRef} required />
      </Form.Group>
      <Button type='submit' className='m-3'>
        Join Game
      </Button>
      <Button onClick={createNewId} variant='secondary'>
        Create Game
      </Button>
    </Form>
  );
}

export default LobbyForm;
