import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

function MultiplayerLobby({ onIdSubmit }) {
  const idRef = useRef();

  const submitCode = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ height: "100vh" }}
    >
      <h1 className='pb-5'>DrawIT</h1>
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
    </Container>
  );
}

export default MultiplayerLobby;
