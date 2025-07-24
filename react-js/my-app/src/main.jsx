import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import "./index.css"
const root = createRoot(document.getElementById('root'));

// const H1 = React.createElement("h1" , null , "Hello world")

root.render(
    <>
  <App/>
    </>

)