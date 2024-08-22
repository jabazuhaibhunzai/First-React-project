import "./App.css";
import Header from "./component/Header";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [data, setData] = useState([]);
  function addData() {
    setData([...data, { name, Email }]);
    setName("");
    setEmail("");
  }
  const remove = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="App">
      <Header />
      <div className="inputs">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          id="name"
          placeholder="Name"
        ></input>
        <input
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          id="Email"
          placeholder="Email"
        ></input>
        <button onClick={addData} id="button">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      {/* data */}
      <div className="data">
        <div className="list">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>
        {data.map((element, index) => {
          return (
            <div className="list">
              <h3>{element.name}</h3>
              <h3>{element.Email}</h3>
              <h3>
                <i class="fa-solid fa-trash" onClick={()=>remove(index)}></i>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
