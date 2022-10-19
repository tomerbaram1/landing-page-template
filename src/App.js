import Landing from "./components/Landing";
import Slider from "./components/Slider";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <>
      {/* in assets folder, replace the images to your choosing. just change their names to img1,2,3. */}
          <Landing imageSrc={img1} />
          <Slider
            imageSrc={img2}
            title={"ITS EASY"}
            subtitle={
              "Just add this landing page to your project."
            }
          />
          <Slider
            imageSrc={img3}
            title={"ENJOY"}
            subtitle={"Your landing page is only a few clicks away."}
            flipped={true}
          />
        </>
        <Footer/>
    </div>
  );
}

export default App;
