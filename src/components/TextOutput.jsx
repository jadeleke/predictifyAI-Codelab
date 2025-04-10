export default function TextOutput({ response, loading }) {
    return (
      <div className="mt-6 w-full max-w-xl text-center">
        <h2 className="text-lg font-semibold mb-2">🧠 AI Suggestion:</h2>
        <div className="min-h-[3rem] p-4 bg-white border rounded-xl shadow text-gray-800">
          {loading ? "Thinking..." : response || "Your AI-generated text will appear here."}
        </div>
      </div>
    );
  }
  