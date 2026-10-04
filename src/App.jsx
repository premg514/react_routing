import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Videos from "./components/Videos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  let videos = [
    {
      id: 1,
      image: "",
      title: "video 1",
      views: "2k",
    },
    {
      id: 2,
      image: "",
      title: "video 2",
      views: "2M",
    },
  ];
  //map knows whatver the content inside the array
  //i want to give each item in a one by one way
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
