import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Grand Family</h1>
      <p className="text-lg mb-4">
        Create and manage your family tree with our easy-to-use interface.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create Your Tree</h2>
          <p>Start building your family tree by adding family members and their relationships.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Manage Relationships</h2>
          <p>Easily manage family relationships including parents, spouses, and children.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;