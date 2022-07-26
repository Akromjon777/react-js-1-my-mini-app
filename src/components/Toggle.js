import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-primary mt-2"
      >
        Toggle btn
      </button>
      {toggle ? <p className="content mt-3">Github Content</p> : null}
    </>
  );
};

export {
    Toggle
}