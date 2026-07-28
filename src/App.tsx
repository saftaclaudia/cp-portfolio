import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
          <Header />
          <Hero />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
