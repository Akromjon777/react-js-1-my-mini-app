import React from "react";
import MyButton from "../Ui/Button/MyButton";

const TableBody = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.todo.title}</td>
      <td>{props.todo.surname}</td>
      <td>{props.todo.programing}</td>
      <td>
        <MyButton onClick={(() => props.remove(props.todo))} className="btn btn-danger">
          Delete
        </MyButton>
      </td>
    </tr>
  );
};

export default TableBody;
