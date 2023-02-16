import React from 'react';
import './App.css';
import {BookPreview} from "./books/book-preview";
import {GoogleLogin} from "@react-oauth/google";

function App() {
    return (
        <div className="App">
            <GoogleLogin onSuccess={resp => console.log(resp)} onError={() => console.error("Nope")}/>
            <BookPreview name="Name" description="Description"/>
        </div>
    );
}

export default App;
