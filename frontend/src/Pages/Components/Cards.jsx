import React, { useState, useEffect } from "react";
import cardData from "../../data/cardData.json";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      setTimeout(() => {
        setPosts(cardData.posts || []);
        setIsLoading(false);
      }, 1000); // Simulate 1s load time
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <div className="animate-pulse grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="h-48 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          Error loading posts: {error.message}
        </div>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-3 rounded relative">
          No posts available.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Grid Layout for 2 Cards per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex">
              {/* Date Box */}
              <div className="w-20 bg-gray-50 p-2 flex flex-col items-center justify-center border-r border-gray-200">
                <div className="text-gray-600 text-sm font-medium">
                  {post.month}
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  {post.day}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 p-4">
                <h2 className="text-lg font-semibold text-zinc-950 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">{post.content}</p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div>{post.author}</div>
                    <div>{post.date}</div>
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={() => console.log(`Navigate to: ${post.title}`)}
                  >
                    Continue...
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
