import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'


function ImportPass() {
  const [inputValue, setInputValue] = useState("");
  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <p>Input something</p>,
      input: "text",
      inputValue,
      preConfirm: () => {
        setInputValue(Swal.getInput()?.value || "");
      },
    });
  };
  return <>
  <button onClick={showSwal}>Show SweetAlert2 modal</button>
</>;
}

export default ImportPass;
