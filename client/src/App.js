import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/main';
import './App.css';
import ViewOne from './components/showOne';

function App() {

  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Switch>
        {/*Main page*/}
        <Route path="/products">
          <Main/>
          </Route>

        <Route path="/">
          <Redirect to="/products"/>{/* redirects back to home */}
        </Route>
        {/*view one product*/}
        <Route path="/products/:id">
          <ViewOne/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
