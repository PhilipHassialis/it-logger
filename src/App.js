import React, { useEffect, Fragment } from "react";
import AddBtn from "./components/layout/AddBtn";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
    // initialize materialize javascript

    useEffect(() => {
        M.AutoInit();
        console.log("M autoinit");
    });

    return (
        <Fragment>
            <SearchBar />
            <div className="container">
                <AddBtn />
                <AddLogModal />
                <Logs />
            </div>
        </Fragment>
    );
};

export default App;
