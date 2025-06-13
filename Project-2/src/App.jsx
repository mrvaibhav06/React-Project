import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <Contact />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;