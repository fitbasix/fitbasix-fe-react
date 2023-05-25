import "./App.css";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import TermsofUse from "./pages/TermsofUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terms" element={<TermsofUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
