import {
  CallToAction,
  Footer,
  Gallery,
  Hero,
  Information,
  Modal,
  Navigation,
} from "./components/imports";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <Information></Information>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
      <Footer></Footer>
      <Modal></Modal>
    </div>
  );
}

export default App;
