import { useState } from "react";

function InputText() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-text">
      <input
        type="text"
        onChange={(e) => {
          e.target.value;
        }}
      />
      <button onClick={() => btnExcluir()}>Add</button>
    </div>
  );
}

export default InputText;
