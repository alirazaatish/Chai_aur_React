import React, { useState } from 'react';
import ThemeContext from './ThemeContext'; // Import the context

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Initialize the theme state

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Toggle between light and dark themes
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* Render the child components */}
        </ThemeContext.Provider>
    );
    
};

export default ThemeProvider;
