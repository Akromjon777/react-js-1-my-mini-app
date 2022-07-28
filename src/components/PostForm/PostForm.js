import React, { useState } from "react";
import MyButton from "../Ui/Button/MyButton";
import MyInput from "../Ui/Input/MyInput";

const PostForm = ({ createPost }) => {
  const [title, setInputVal] = useState("");
  const [surname, setSurname] = useState("");
  const [programing, setPrograming] = useState("");
  const addPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      surname,
      programing,
    };
    createPost(newPost);
    setInputVal("");
    setSurname("");
    setPrograming("");
  };
  return (
    <>
      <form>
        <h3 className="text-center">Create new post</h3>
        <MyInput
          type="text"
          placeholder="Enter your name"
          className="form-control"
          value={title}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Enter your surname"
          className="form-control my-2"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Enter your programing"
          className="form-control my-2"
          value={programing}
          onChange={(e) => setPrograming(e.target.value)}
        />
      </form>
      <MyButton onClick={addPost}>Add Post</MyButton>
    </>
  );
};

export default PostForm;
