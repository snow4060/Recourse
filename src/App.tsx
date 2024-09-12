import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/App.css";
import ModalProvider from "./components/Modal/context/ModalContext";
import Modal from "./components/Modal/Modal";
import Instructions from "./components/Instructions/Instructions";

function App() {
  return (
    <>
      <ModalProvider>
        <Modal />

        <Header />
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="classListing" element={<p>class listing</p>} />
          <Route path="classPlanner" element={<p>class planner</p>} />
          <Route path="classSearch" element={<p>class search</p>} />
          <Route path="instructions" element={<Instructions />} />
        </Routes>
      </ModalProvider>
    </>
  );
}

export default App;
