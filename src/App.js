import { useState } from "react";
import PostForm from "./components/PostForm/PostForm";
import TableList from "./components/TableList/TableList";
import "./style/style.css";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Akromjon", surname: "Rahimjonov", programing: "Javascript" },
    { id: 2, title: "Xusan", surname: "Jamalov", programing: "Python" },
    { id: 3, title: "Alisher", surname: "Rovshanov", programing: "C++" },
  ]);

  const createPost = (newPost) => {
    setTodos([...todos, newPost])
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(remove => remove.id !== todo.id))
  }

  return (
    <>
      <div className="app w-50 mx-auto">
        <PostForm createPost={createPost}/>
      {
        todos.length ? <TableList remove={removeTodo} todos={todos} title="Programing language" /> : <h5 className="text-center my-3">You should some text</h5>
      }
      </div>
    </>
  );
}
export default App;
