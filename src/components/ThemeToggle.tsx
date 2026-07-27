import { useTheme } from "../context/useTheme";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {isDark ? "☀️ light" : "🌙 dark"}
    </button>
  );
}
export default ThemeToggle;
