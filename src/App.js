import Navbar from "../src/assets/Components/Navbar/Navbar"
import Hero from "../src/assets/Components/Hero/Hero"
import About from "../src/assets/Components/About/About"
import Class from "../src/assets/Components/Class/Class"
import Trainer from "../src/assets/Components/Trainer/Trainer"
import Feature from "../src/assets/Components/Feature/Feature"
import Testimonial from "../src/assets/Components/Testimonial/Testimonial"
import Contact from "../src/assets/Components/Contact/Contact"
import BackTotop from "../src/assets/Components/BackTotop/BackTotop"
import Footer from "../src/assets/Components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Class />
      <Trainer />
      <Feature />
      <Testimonial />
      <Contact />
      <BackTotop />
      <Footer />
    </div>
  );
}

export default App;
