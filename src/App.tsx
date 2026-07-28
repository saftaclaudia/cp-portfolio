import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
          <Header />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
