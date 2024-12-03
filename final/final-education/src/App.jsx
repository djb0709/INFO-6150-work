import './App.css';
import HomePage from './HomePage/HomePage';
import Courses from './Courses/Courses';
import About from './About/About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';

function App() {


  const path = document.location.pathname;
  const [page, setPage] = useState(window.location.pathname);




  //back for ward listener
  useEffect(() => {
    console.log("add listener");

    function handleChange() {
      console.log("change state");
      setPage(document.location.pathname);
    }

    window.addEventListener('popstate', handleChange);

    return () => {
      console.log("clean");
      window.removeEventListener('popstate', handleChange)
    };
  }, []);



  function changePage(event) {
    event.preventDefault();
    if (event.target.pathname === document.location.pathname) {
      return;
    }
    window.history.pushState(null, '', event.target.pathname);//change url on top
    setPage(event.target.pathname);
  }



  return (
    <>
      <Header changePage={changePage} />
      <main className='main' id='main' >
        {page === "/" && <HomePage />}
        {page === "/courses" && <Courses />}
        {page === "/about" && <About />}

      </main>

      <Footer ></Footer>
    </>


  );
}

export default App;
