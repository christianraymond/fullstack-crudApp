import './App.css';
import { Fragment } from 'react';

//Components
import InputTodo from './components/InputTodo'

function App() {
  return (
    <Fragment>
     <div className="container">
     <InputTodo />
     </div>
    </Fragment>
  );
}

export default App;
