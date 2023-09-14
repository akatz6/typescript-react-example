import "./App.css";
import axios from "axios";
import Show from "./Show";
import React, { useState, useEffect } from "react";
import { Info } from "./Interfaces";

function App() {

  const [rickMorty, getRickMorty] = useState<Info[]>([]);
  // const [rickMortyTwo, getRickMortTwo] = useState<string>(); example for primitive type
  const getRickAndMorty = async () => {
    try {
      const reponse = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      getRickMorty(reponse.data.results);
    } catch (e) {}
  };
  /*
    (e) => ({

    })

    {
      map(element => {
        (
          return 
        )
      })
    }
    data = new DataForm()
    fromdata = Object.getEntries(data)
  */
  useEffect(() => {
    getRickAndMorty();
  }, []);
  return (
    <>
      <div className="App">
        {rickMorty?.map((element: Info) => {
          return <Show key={element.id} element={element} />;
        })}
      </div>
    </>
  );
}

export default App;
