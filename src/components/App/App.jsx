import React from 'react';
import './App.css'
import Calculator from "../Calculator/Calculator";

/*const App = () => <div className="app-container"/>;*/

class App extends React.Component{

    render() {
        return(
            <div className="app-container">
                <Calculator/>
            </div>
        );
    }
}

export default App;
