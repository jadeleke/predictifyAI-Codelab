import axios from "axios";
import "../styles/TextInput.css";

export default function TextInput({ userInput, setUserInput, setAiResponse, loading, setLoading }) {
  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setAiResponse("");

    try {
      // Replace this URL with your actual PaLM API endpoint
      const response = await axios.post("https://api.mock.com/palm", { prompt: userInput });
      setAiResponse(response.data.generatedText || "Example: to the store to buy snacks.");
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
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="button"
      >
        {loading ? "Predicting..." : "✨ Predict Text"}
      </button>
    </div>
  );
}
