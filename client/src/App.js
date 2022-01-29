import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/main';
import './App.css';
import ViewOne from './components/showOne';
import Update from './components/update';

function App() {

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Switch>

        <Route exact path="/products/:id/update">
          <Update/>
        </Route>

        {/*view one product*/}
        <Route exact path="/products/:id">
          <ViewOne/>
        </Route>

        {/*Main page*/}
        <Route  exact path="/products">
          <Main/>
        </Route>

        <Route path="/">
          <Redirect to="/products"/>{/* redirects back to home */}
        </Route>
        

      </Switch>

    </div>
  );
}

export default App;
