import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToHash />
          <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
