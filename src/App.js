import { Route, Routes } from "react-router-dom";
import Antibiotic from "./pages/antibiotic";
import AntibioticAr from "./pages/antibiotic-ar";
import Home from "./pages/home";
import Ar from "./pages/home-ar";
import HeartAr from "./pages/heart-ar";
import Heart from "./pages/heart";
import LungAr from "./pages/lung-ar";
import Lung from "./pages/lung";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ar" element={<Ar />} />
        <Route path="/Lung" element={<Lung />} />
        <Route path="/LungAr" element={<LungAr />} />
        <Route path="/Heart" element={<Heart />} />
        <Route path="/HeartAr" element={<HeartAr />} />
        <Route path="/Antibiotic" element={<Antibiotic />} />
        <Route path="/AntibioticAr" element={<AntibioticAr />} />
      </Routes>
    </>
  );
}

export default App;
