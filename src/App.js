import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: FloralWhite;
  // ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
      <Router >
        
        <Navbar />
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Body>
        <betweenLine />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />

            <Skills />
            <Education />
            <Contact />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        </ThemeProvider>
      </Router>
  );
}

export default App;
