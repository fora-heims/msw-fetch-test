import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
