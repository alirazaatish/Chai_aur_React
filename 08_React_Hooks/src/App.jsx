import React from 'react';
import ThemeProvider from './components/context/ThemeProvider'; // Import the ThemeProvider
import ThemeButton from './components/ThemeButton';// Import the ThemeButton
import AuthProvider from './components/context/AuthProvider';
import AuthButton from './components/AuthButton';
import UseRefHook from './components/UseRef';
import UseReducerHook from './components/UseReducer';
import Todos from './components/TodoList';
import UseEffectHook from './components/UseEffect';
import UseCallback from './components/UseCallback/UseCallback';

const App = () => {
    return (
        // <AuthProvider>
        //   <ThemeProvider> 
        //     <ThemeButton />
        //     <AuthButton />
        //     <UseReducerHook />
        //     <Todos />
        //  </ThemeProvider>
        // </AuthProvider>
        // <UseEffectHook />
            // <UseRefHook />
            // <UseReducerHook />
            <UseCallback />
    );
};

export default App;
