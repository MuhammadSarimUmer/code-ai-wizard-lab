import { useState } from 'react';
import { AIMentorService } from '../../services/AIMentorService';

const aiMentorService = new AIMentorService();

export function AIMentor() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await aiMentorService.getResponse(input);
      setResponse(result);
    } catch (error) {
      setResponse('Error: Unable to fetch response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Ask your question..."
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}