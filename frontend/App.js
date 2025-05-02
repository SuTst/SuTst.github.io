import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Custom Cursor Demo</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
        Hover over me
      </button>
      <a href="#" className="text-blue-700 underline mb-4">Hover over this link</a>
      <div className="selectable bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Hover over this box
      </div>
    </div>
  );
}
