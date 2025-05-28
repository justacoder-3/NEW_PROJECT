import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');

  // This would typically come from your backend
  const post = {
    id,
    title: 'Sample Post Title',
    content: 'This is a sample post content. In a real application, this would be fetched from your backend based on the post ID.',
    author: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/40',
    },
    date: new Date().toLocaleDateString(),
    images: [
      'https://via.placeholder.com/800x400',
    ],
    comments: [
      {
        id: 1,
        author: {
          name: 'Jane Smith',
          avatar: 'https://via.placeholder.com/40',
        },
        content: 'This is a sample comment!',
        date: new Date().toLocaleDateString(),
      },
    ],
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log('Submitting comment:', comment);
    setComment('');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Post Header */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
        </div>

        {/* Post Images */}
        {post.images && post.images.length > 0 && (
          <div className="border-t border-gray-100">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        )}

        {/* Comments Section */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments</h2>
          
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              rows="3"
              required
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{comment.author.name}</h4>
                    <p className="text-xs text-gray-500">{comment.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
