import React, { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getCharacterInfo } from "./services/getCharacterInfo";
import { getSavedData, saveData } from "./services/storage";

function App() {
  const [character, setCharacter] = useState(undefined);

  useEffect(() => {
    const saved = getSavedData("CHARACTER");
    if (saved) {
      setCharacter(saved);
    } else {
      getCharacterInfo().then((value) => {
        setCharacter(value);
        saveData("CHARACTER", value);
      });
    }
  }, []);

  if (!character) return React.Fragment;
  else
    return (
      <div className="App">
        <header className="main_header">
          <img
            className="main_picture"
            src={character.image}
            alt="black_widow"
          />
          <h1 className="main_title">Black Widow</h1>
        </header>

        <main>
          <Router>
            <Route path="/" exact>
              <MainPage
                numberOfComics={character.comicsNumber}
                selectOptions={character.events}
              />
            </Route>
            <Route path="/comic/:id">
              <DetailPage />
            </Route>
          </Router>
        </main>
      </div>
    );
}

export default App;
