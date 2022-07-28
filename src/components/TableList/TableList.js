import React from "react";
import TableBody from "../Tbody/TableBody";
import TableHead from "../Thead/TableHead";

const TableList = ({todos, remove}) => {
  return (
    <>
      <h4 className="text-center">Favourite Programing</h4>
      <table className="table table-striped">
        <TableHead />
        <tbody>
          {todos.map((todo, i) => (
            <TableBody remove={remove} number={i + 1} todo={todo} key={todo.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
