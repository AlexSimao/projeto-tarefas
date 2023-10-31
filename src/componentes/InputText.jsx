import { useState } from "react";

function InputText() {
  const [inputText, setInputText] = useState("");

  return (
    <p>
      <input
        type="text"
        onChange={(e) => {
          e.target.value = "";
        }}
      />
      <button onClick={() => btnExcluir()}>Excluir</button>
    </p>
  );
}

export default InputText;
