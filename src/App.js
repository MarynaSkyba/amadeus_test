import "./App.css";
import Header from "./components/Header/Header";
import SiteIntroduction from "./components/SiteIntroduction/SiteIntroduction";
import MainVisual from "./components/MainVisual/MainVisual";
import QuickInfo from "./components/QuickInfo/QuickInfo";
import ContactUs from "./components/ContactUs/ContactsUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <MainVisual />
      <SiteIntroduction />
      <QuickInfo id="library"/>
      <ContactUs id="contact"/>
      <Footer />
    </div>
  );
}

export default App;
