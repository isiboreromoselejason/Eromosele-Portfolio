import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Featured } from "./components/Featured";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <main className="app">
        <Navbar />
        <section className="sections">
          <Hero />
          <About />
          <Featured />
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
