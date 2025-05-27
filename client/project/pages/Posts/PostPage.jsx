import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Post Title Here (fetched by ID: {id})</h2>
      <p className="mb-4 text-gray-700">Post content goes here...</p>
      
      <h3 className="text-lg font-semibold mb-2">Comments:</h3>
      <ul className="space-y-2">
        {/* Comments fetched and listed here later */}
        <li className="bg-white p-2 rounded shadow">Sample comment</li>
      </ul>

      <form className="mt-4">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-2 border rounded mb-2"
          rows="3"
        ></textarea>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Comment
        </button>
      </form>
    </div>
  );
};

export default PostPage;
