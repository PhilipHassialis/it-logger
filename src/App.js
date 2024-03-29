import React, { useEffect, Fragment } from "react";
import AddBtn from "./components/layout/AddBtn";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import { Provider } from "react-redux";
import store from "./store";

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
        <Provider store={store}>
            <Fragment>
                <SearchBar />
                <div className="container">
                    <AddBtn />
                    <AddLogModal />
                    <EditLogModal />
                    <AddTechModal />
                    <TechListModal />
                    <Logs />
                </div>
            </Fragment>
        </Provider>
    );
};

export default App;
