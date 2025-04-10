import axios from "axios";

export default function TextInput({ userInput, setUserInput, setAiResponse, loading, setLoading }) {
  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setAiResponse("");

    try {
      // Replace this URL with your actual PaLM API endpoint later
      const response = await axios.post("https://api.mock.com/palm", { prompt: userInput });
      setAiResponse(response.data.generatedText || "Example: to the store to buy snacks.");
    } catch (error) {
      setAiResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl">
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Start typing your phrase here..."
        rows={4}
        className="w-full p-4 mb-4 border border-gray-300 rounded-xl resize-none"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        {loading ? "Predicting..." : "✨ Predict Text"}
      </button>
    </div>
  );
}
