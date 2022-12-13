import React from 'react';
import {Provider} from "react-redux";

import Main from "../Pages/Main/Main";
import store from "../shared/store";

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;
