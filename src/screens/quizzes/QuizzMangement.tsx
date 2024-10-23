import React from 'react';

const QuizManagementLayout = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Management</h2>
      {/* Add quiz management components here */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Quiz ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Date Created</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example quiz rows */}
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Quiz Title 1</td>
              <td className="py-2 px-4 border-b">01/01/2024</td>
              <td className="py-2 px-4 border-b">Edit/Delete</td>
            </tr>
            {/* Add more quiz rows as necessary */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizManagementLayout;
