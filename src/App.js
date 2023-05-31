import Form from "./components/Form";
import "./App.css";
// import Dashbord from "./components/Dashbord";
// import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import All from "./components/All";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/All" element={<All />} />
      </Routes>
    </>
  );
}

export default App;
