import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function Search(props) {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search"
        onChange={(event) => props.search(event.target.value)}
      />
    </InputGroup>
  );
}
