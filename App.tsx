import React from "react";
import ReactDOM from 'react-dom';
import Canvas from "./Canvas";

function App() {
    return (
        <>
            <Canvas />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));