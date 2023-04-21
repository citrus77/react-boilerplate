import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import {
    Home
} from '.';

const App = () => {
    return (
        <div id="App">
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
