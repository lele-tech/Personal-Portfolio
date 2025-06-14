import Header from './Components/Header';
import TechStack from './Components/TechSkills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;