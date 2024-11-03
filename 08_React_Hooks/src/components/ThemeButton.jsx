import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';// Import the context

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the context

    return (
        <div>
            <button onClick={toggleTheme}
                    style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
                Current theme: {theme} (Click to toggle)
            </button>
        </div>
    );
};

export default ThemeButton;
