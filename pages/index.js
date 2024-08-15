// pages/index.js
import { useState } from "react";
import { generateFlashcardContent } from "./openAi";

const FlashcardPage = () => {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateFlashcard = async () => {
    console.log("Generating flashcard for prompt:", prompt);
    setLoading(true);
    setError("");
    try {
      const result = await generateFlashcardContent(prompt);
      console.log("Generated flashcard content:", result);
      setContent(result);
    } catch (err) {
      console.error("Error generating flashcard content:", err);
      setError("Unable to generate a response at this time.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">AI Flashcards</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a topic"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleGenerateFlashcard}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Flashcard"}
        </button>
        {content && (
          <div className="mt-4 p-4 bg-blue-100 rounded-md">
            <h2 className="text-xl font-bold">Generated Flashcard</h2>
            <p>{content}</p>
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-100 rounded-md">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardPage;
