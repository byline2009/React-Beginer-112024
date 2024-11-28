import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const initState = [
  { id: "1", name: "play game" },
  { id: "2", name: "read book" },
];
const Todo = () => {
  const [todos, setTodos] = useState(initState);
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState("");
  useEffect(() => {
    // console.log("CHECK", todos);
  }, [todos]);
  const edit = (index) => {
    console.log("index", index);
    setIsEdit(true);
    setIndex(index);
    const object = todos[index];
    console.log("edit object", object);
    setName(object.name);
    // setTodos(newArray);
  };

  return (
    <>
      <div className="d-flex flex-row mb-5">
        <input
          type="text"
          className="me-2"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {!isEdit ? (
          <>
            <Button
              //   className="btn btn-primary"
              variant="primary"
              onClick={() => {
                setTodos([...todos, { id: Date.now().toString(), name: name }]);
              }}
            >
              Add todo
            </Button>
          </>
        ) : (
          <>
            <Button
              //   className="btn btn-primary"
              variant="primary"
              onClick={() => {
                const todosCopy = Object.assign(todos);
                todosCopy[index] = { id: todosCopy[index].id, name: name };
                setTodos(todosCopy);
                setIsEdit(false);
                setName("");
              }}
            >
              Edit
            </Button>
          </>
        )}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>
                <button
                  onClick={() => {
                    edit(index);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    const todosCopy = Object.assign(
                      todos.filter((a) => a.id !== todo.id)
                    );
                    setTodos(todosCopy);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Todo;
