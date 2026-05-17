import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// =====================================
// CONTEXT
// =====================================
const ThemeContext =
  createContext();

// =====================================
// PROVIDER
// =====================================
export const ThemeProvider = ({
  children,
}) => {

  const [theme, setTheme] =
    useState(

      localStorage.getItem(
        "trackshield_theme",
      ) || "dark",
    );

  // =====================================
  // APPLY THEME
  // =====================================
  useEffect(() => {

    document.body.style.background =
      theme === "dark"
        ? "#020817"
        : "#f8fafc";

    document.body.style.color =
      theme === "dark"
        ? "white"
        : "#0f172a";

    localStorage.setItem(
      "trackshield_theme",
      theme,
    );

  }, [theme]);

  // =====================================
  // TOGGLE
  // =====================================
  const toggleTheme = () => {

    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark",
    );
  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
};

// =====================================
// HOOK
// =====================================
export const useTheme =
  () => useContext(
    ThemeContext,
  );