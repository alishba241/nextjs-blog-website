"use client";

import { useState } from "react";
import React from "react";

function Comments() {
  // ! states to handle comments

  const [comments, setComments] = useState<
    { name: string; comment: string; date: string }[]
  >([]);
  const [newcomments, setnewcomments] = useState<string>("");
  const [name, setname] = useState("");

  //! commments with user name and date

  const handleComments = () => {
    if (name.trim() && newcomments.trim()) {
      const date = new Date().toLocaleString();
      setComments([...comments, { name, comment: newcomments, date }]);
      setnewcomments("");
      setname("");
    }
  };
  return (
    <div className="comment-section mt-8 p-6 md:w-[60%] w-[85%] mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Comments
      </h2>

      <ul className="mb-4">
        {comments.map((comment, index) => {
          return (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm border"
            >
              <div className="flex items-center justify-between mb-2 h-[0px]">
                <h3 className="text-sm md:text-lg font-medium text-cyan-800">
                  {comment.name}
                </h3>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p>{comment.comment}</p>
            </li>
          );
        })}
      </ul>
      <div className="mt-6">
        <input
          type="text"
          className="w-full h-[40px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4 transition duration-150 ease-in-out"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="text"
          className="w-full h-[40px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4 transition duration-150 ease-in-out"
          placeholder="Add a comment..."
          value={newcomments}
          onChange={(e) => setnewcomments(e.target.value)}
        />
        <button
          onClick={handleComments}
          className="w-full h-[40px]  bg-cyan-900 text-white p-2 rounded-lg font-semibold hover:bg-cyan-800 transition duration-200"
        >
          Add a Comment
        </button>
      </div>
    </div>
  );
}

export default Comments;
