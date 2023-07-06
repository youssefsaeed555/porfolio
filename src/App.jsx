import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Banner from "./components/banner";
import WhatIDo from "./components/WhatIDo";
import TimeLine from "./components/TimeLine";
import Projects from "./components/Projects";
// import Swiper from "./components/Swiper";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <div className="container mx-auto max-w-7xl text-3xl text-primary">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <WhatIDo></WhatIDo>
                  <Home></Home>
                  <TimeLine></TimeLine>
                  <Projects></Projects>
                  {/* <Swiper></Swiper> */}
                  <Contact></Contact>
                </>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
