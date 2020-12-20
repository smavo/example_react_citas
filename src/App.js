import React, {Fragment} from 'react';
import Form from './Components/Form';


function App() {
  return (
    <Fragment>
      <h2>Administrador de Tareas</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
                <Form />
          </div>
          <div className="one-half column">
                2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
