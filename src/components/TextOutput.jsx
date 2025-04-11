export default function TextOutput({ response, loading }) {
  return (
    <div className="text-output-container">
      <h1 className="title">🧠 AI Suggestion:</h1>
      <div className="response-box">
        {loading ? "Thinking..." : response || "Your AI-generated text will appear here."}
      </div>
    </div>
  );
}
