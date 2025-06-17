import React, { useState } from 'react';
import axios from 'axios';

const DoubtAi = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) {
      setError('Please enter a question');
      return;
    }
    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await axios.post('http://localhost:4000/ask-doubt', { question });
      // assuming your backend sends answer as { answer: "text" }
      setAnswer(response.data.answer || 'No answer received');
    } catch (err) {
      setError(
        err.response?.data?.error ||
        err.message ||
        'Failed to get answer from server'
      );
    } finally {
      setLoading(false);
    }
  };

  return (<div className='min-h-screen'>
  <div className="mb-5 max-w-3xl mx-auto p-6 sm:p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Ask Doubt with AI
      </h2>

      <textarea
        rows="5"
        className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className={`mt-4 w-full py-3 font-semibold rounded-md transition-colors ${
          loading
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
        } text-white`}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>

      {error && (
        <p className="mt-4 text-red-600 text-center font-medium">{error}</p>
      )}

     {answer.length > 0 && (
  <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-900 border border-blue-300 dark:border-gray-700 rounded-2xl shadow-xl space-y-5">
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">AI's Response</h3>
    </div>

    {answer.map((block, index) =>
      block.type === 'heading' ? (
        <h4 key={index} className="text-lg font-semibold text-blue-700 dark:text-blue-400">{block.content}</h4>
      ) : (
        <p key={index} className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{block.content}</p>
      )
    )}
  </div>
)}

    </div>
  </div>
    
  );
};

export default DoubtAi;
