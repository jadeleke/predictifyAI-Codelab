export default function TextOutput({ response, loading }) {
  return (
    <div className="text-output-container">
      <h2 className="title">🧠 AI Suggestion:</h2>
      <div className="response-box">
        {loading ? "Thinking..." : response || "Your AI-generated text will appear here."}
      </div>
    </div>
  );
}
