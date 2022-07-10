import { useState, useEffect } from "react";
import ImgAldo from "./assets/aldo-photo.jpg";
import ImgMario from "./assets/mario-photo.jpg";
import ImgBruno from "./assets/bruno-photo.jpg";
import ImgNico from "./assets/neec-photo.jpg";
import ImgBraifz from "./assets/braifz-photo.jpg";
import "./App.css";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const loPibe = [
    {
      name: "Mario",
      task: [],
      image: ImgMario,
    },
    {
      name: "Bruno",
      task: [],
      image: ImgBruno,
    },
    {
      name: "Braian",
      task: [],
      image: ImgBraifz,
    },
    {
      name: "Nico",
      task: [],
      image: ImgNico,
    },
    {
      name: "Aldo",
      task: [],
      image: ImgAldo,
    },
  ];

  const shuffleArray = (inputArray) => {
    inputArray.sort(() => Math.random() - 0.5);
  };

  const tasks = [
    "COCINA",
    "TRAPEO",
    "GARAJE(ORDEN)",
    "GARAJE PISO",
    "LAVADERO",
    "BAÑO ABAJO",
    "BAÑO ARRIBA",
    "PATIO",
    "BAÑO-LAVADERO",
    "FRENTE",
  ];

  const sortTareas = () => {
    shuffleArray(tasks);
    console.log(tasks);
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < tasks.length; i++) {
        if (loPibe[j].task.length == 2) {
          j++;
        }
        loPibe[j].task.push(tasks[i]);
      }
    }
  };

  const handleClick = () => {
    setIsTrue(true);
  };
  sortTareas();

  return (
    <>
      <div className="App">
        <h1 className="title">Sortear Ambientes - Limpieza de domingos</h1>
        <div className="layout">
          <div className="wrapper-cards">
            {isTrue &&
              loPibe.map((e) => (
                <div className="card" key={e.name}>
                  <img src={e.image} alt={e.name} />
                  <h1>{e.name}</h1>
                  <p>
                    Ambiente 1: <strong>{e.task[0]}</strong>
                  </p>
                  <p>
                    Ambiente 2: <strong>{e.task[1]}</strong>
                  </p>
                </div>
              ))}
          </div>
          {isTrue == false && (
            <button onClick={handleClick}>Sortear Tareas</button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
