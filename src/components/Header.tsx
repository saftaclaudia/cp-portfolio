import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-900  text-gray-900 dark:text-white py-6 px-8 flex justify-between items-center border-gray-200 dark:border-gray-800">
      <h1 className="text-2xl font-bold">Caludia Popescu</h1>
      <nav className="flex items-center gap-6">
        <a
          href="#projects"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Contact
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Header;
