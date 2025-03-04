import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
    </main>
  );
}

export default App;
