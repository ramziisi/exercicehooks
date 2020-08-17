import React from "react";
import Menu from "./Menu";
import "./App.css";

//const Alert=(text)=>{alert(text)}

function App() {
  const [listNAme, setListname] = React.useState([{Name : "fn" ,Age : 55 , classe : "2eme"}]);
  const [verif , setVerif] = React.useState(false)
  const [per, setPer] = React.useState({
    Name: "",
    Age: "",
    classe: "",
  });

  const handlechange = (e) => {
    setPer({ ...per, [e.target.name]: e.target.value });
  };
  const ajouetNewper = () => {
    setListname([...listNAme, per]);
    setPer({
      Name: "",
      Age: "",
      classe: "",
    });
  };
  const deletePer = perNAme => {
      setListname(listNAme.filter(el=>el.Name !== perNAme))
  };
  return (
    <div className="App">
      <input
        type="text"
        value={per.Name}
        name="Name"
        placeholder="name"
        onChange={handlechange}
      ></input>
      <br></br>
      <input
        type="text"
        value={per.Age}
        name="Age"
        placeholder="age"
        onChange={handlechange}
      ></input>
      <br></br>
      <input
        type="text"
        value={per.classe}
        name="classe"
        placeholder="classe"
        onChange={handlechange}
      ></input>
      <br></br>
      <button onClick={ajouetNewper}>ajouter</button>
      <button onClick={()=>setVerif(!verif)}>{verif ? "hide" : "affich"}</button>
      {verif && listNAme.map((el) => (
        <Menu deletePer={deletePer} infoper={el} />
      ))}
    </div>
  );
}

export default App;
