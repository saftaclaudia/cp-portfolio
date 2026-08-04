import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import ProjectDetailPage from "./pages/ProjectDetailPage";

import { LanguageProvider } from "./context/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ScrollToHash from "./components/ScrollToHash";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToHash />
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <BackToTop />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
