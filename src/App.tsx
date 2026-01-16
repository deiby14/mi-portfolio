import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;
