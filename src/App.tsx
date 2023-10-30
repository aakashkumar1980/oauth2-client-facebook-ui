import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/Navigation"
import { Footer } from "./components/footer/Footer"

import Friends from "./components/pages/Friends";
import Albums from "./components/pages/Albums";

function App() {
  return (
    <section className="maincontainer">
        <div className="headercontainer">
          <Header />
        </div>

        <div className="bodycontainer">
          <section className="bodysection">
            <div className="navigationcontainer">
              <Navigation />
            </div>
            <div className="contentcontainer">
              <BrowserRouter>
                <Routes>
                  <Route path="/friends" element={<Friends/>}></Route>
                  <Route path="/albums" element={<Albums/>}></Route>

                </Routes>          
              </BrowserRouter>
            </div>
          </section>
        </div>

        <div className="footercontainer">
          <Footer />
        </div>
    </section>
  );
}

export default App;
