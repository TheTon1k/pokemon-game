import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import layoutBg from "./imgs/bg1.jpg"

const App =() => {
  return (<>
      <Header title='Headertitle' descr='description'/>
      <Layout id={1} title='Layout1Title' descr='descr1' urlBg={layoutBg} colorBg/>
      <Layout id={2} title='Layout2Title' descr='descr2' urlBg colorBg='yellow'/>
      <Layout id={3} title='Layout3Title' descr='descr3'  urlBg={layoutBg} colorBg/>
      <Footer/>
      </>

  )
}

export default App;
