import { useTheme } from "./ThemeContext";
import style from '../styles/theme_switcher.module.css'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={style['theme-switcher']} onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
    </button>
  );
};