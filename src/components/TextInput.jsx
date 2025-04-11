import axios from "axios";
import "../styles/TextInput.css";

const apikey = import.meta.env.VITE_GEMINI_API_KEY; // make sure env var starts with VITE_ if you're using Vite

export default function TextInput({ userInput, setUserInput, setAiResponse, loading, setLoading }) {
  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setAiResponse("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: userInput
                }
              ]
            }
          ]
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const result = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "no response bruh, try again.";
      setAiResponse(result);
    } catch (error) {
    
      setAiResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-input-container">
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Start typing your phrase here..."
        rows={4}
        className="textarea"
      />
      <button onClick={handleSubmit} disabled={loading} className="button">
        {loading ? "Predicting..." : "✨ Predict Text"}
      </button>
    </div>
  );
}
