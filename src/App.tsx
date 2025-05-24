import Container from "react-bootstrap/Container";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Container className="py-4">
      <div className="title text-center text-cadbury font-custom">
        Sandra & Chris
      </div>
      <div className="date text-center text-cadbury">22.03.2025</div>
      <div className="subtitle text-center text-cadbury">
        Wir haben ja gesagt!
      </div>
      <Gallery />
      <ScrollToTop />
    </Container>
  );
}

export default App;
