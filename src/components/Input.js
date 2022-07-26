import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("Akrom")

  return (
    <>
      <p className="value">Value: {value}</p>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </>
  );
};

export {
    Input
}
