import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChange} type="text" value={props.inpText} />
      <button onClick={props.add}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
