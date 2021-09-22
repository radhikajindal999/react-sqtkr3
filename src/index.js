import React,{useState} from "react";
import ReactDOM from "react-dom";

import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));
function  Converter()
{
  const[km,setKm] = useState(0);
  function handleChange(e)
  {
    setKm(e.target.value);

  }
  function convert(km)
  {
    return (km/1.609).toFixed(2);
  }
  return <div>
    <input type ="text" value = {km} onChange = {handleChange} />
    <p>{km} is {convert(km)} miles </p></div>;
}
const el = <Converter />;
ReactDOM.render(el,document.getElementById('convertor'));
 function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number"  onChange= {handleChange} />
      <input type="submit" value="Add" />
      <p> Sum is {sum} </p>
    </form>
  );
}

 ReactDOM.render(<AddForm />, document.getElementById("sum"));
