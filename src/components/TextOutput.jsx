import "../styles/TextOutput.css";

export default function TextOutput({ response, loading }) {
  return (
    <div className="text-output-container">
      <h1 className="text-output-title">🧠 AI Suggestion:</h1>
      <div className="text-output-box">
        <p className="text-output-response">
          {loading ? "Thinking..." : response || "Your AI-generated text will appear here."}
        </p>
      </div>
    </div>
  );
}
