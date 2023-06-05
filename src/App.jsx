import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Blog,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
