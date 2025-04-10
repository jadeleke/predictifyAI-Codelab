import { useState } from 'react';
import TextInput from './components/TextInput';
import TextOutput from './components/TextOutput';

function App() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-2">🔮 AI Text Predictor</h1>
      <p className="text-gray-600 mb-6 text-center">
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
    </div>
  );
}

export default App;
