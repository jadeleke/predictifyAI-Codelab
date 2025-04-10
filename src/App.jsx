import { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import TextOutput from './components/TextOutput';
import './index.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return !prev;
    });
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="app-title">🔮 AI Text Predictor</h1>
      <p className="app-description">
        Type a phrase and let the AI complete it!
      </p>

      <TextInput
        userInput={userInput}
        setUserInput={setUserInput}
        setAiResponse={setAiResponse}
        loading={loading}
        setLoading={setLoading}
      />
      
      <TextOutput response={aiResponse} loading={loading} />
      
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default App;
