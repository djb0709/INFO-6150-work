import "./css/App.css"
import { useState } from "react";
import Header from './components/Header.jsx';
import MainArea from './components/MainArea.jsx';
import Footer from "./components/Footer.jsx";
import Content from './components/Content.jsx';
import Card from './components/Card.jsx';
import Panels from "./components/Panels.jsx";
import Modal from "./components/Modal.jsx";
function App() {
  const [currentPage, setCurrentPage] = useState("content");
  const [message, setMessage] = useState("");
  const changePage = () => {
    if (currentPage === "content") {
      return <Content />;
    } else if (currentPage === "card") {
      return <Card setToPage={setCurrentPage} setMessage={setMessage} />;
    } else if (currentPage === "panels") {
      return <Panels />;
    }
  };
  return (
    <>

      <Header setToPage={setCurrentPage} setMessage={setMessage} />
      <div className="other">
        <p className="other-h2">Visual alert</p>
        {message && <p className="message">{message}</p>}
        <p className="other-h2">Modal control</p>
        <Modal setMessage={setMessage} />
      </div>
      <MainArea changePage={changePage} setMessage={setMessage} >

      </MainArea>


      <Footer />
    </>
  );
}

export default App;
