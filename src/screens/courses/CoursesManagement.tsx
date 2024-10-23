import React from 'react';

const ContentManagementLayout = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Content Management</h2>
      {/* Add content management components here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md rounded-lg">Content Item 1</div>
        <div className="bg-white p-4 shadow-md rounded-lg">Content Item 2</div>
        <div className="bg-white p-4 shadow-md rounded-lg">Content Item 3</div>
      </div>
    </div>
  );
};

export default ContentManagementLayout;
