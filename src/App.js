import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route strict exact path="/" component={CharactersList} />
        <Route strict exact path="/:id" component={Character} />
      </Switch>
    </div>
  );
}

export default App;
