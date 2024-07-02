import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Interests from "./components/Interests/Interests.jsx";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer.jsx";

export default function Home() {
  return (
    <main>
      <>
        <Header />
        <About />
        <Interests />
        <Form />
        <Footer />
      </>
    </main >
  );
}
