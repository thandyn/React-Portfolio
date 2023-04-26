import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Project" },
    { name: "Contact Me" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header />
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
