import { useRoutes } from "react-router-dom";
import "./App.css";
import Router from "./routes";
import { useState, useEffect } from "react";
import { UserProvider } from "./contexts/userContext";
import { useCallback } from "react";

function App() {
    const Routes = () => useRoutes(Router);

    const [status, setStatus] = useState("idle");
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        setStatus("fetching");
        // please use json server to watch ../../data/data.json
        const response = await fetch("http://localhost:3000/data");
        const data = await response.json();
        setData(data);
        setStatus("fetched");
    }, []);

    useEffect(
        () => async () => {
            await fetchData();
        },
        [fetchData]
    );

    return (
        <div className="App">
            <UserProvider value={{ status: status, data: data }}>
                <Routes />
            </UserProvider>
        </div>
    );
}

export default App;
