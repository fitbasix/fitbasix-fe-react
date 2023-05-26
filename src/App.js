import "./App.css";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import TermsofUse from "./pages/TermsofUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ThankYou from "./pages/ThankYou";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terms" element={<TermsofUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/error" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
