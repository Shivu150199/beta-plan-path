import React from 'react';

const ShareModal = ({ isOpen, onClose, onShare }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-[300px]">
        <h2 className="text-lg font-bold mb-4">Share via</h2>
        <div className="flex justify-between mb-4">
          {/* Replace # with actual share links or functionalities */}
          <a href="#" onClick={() => onShare('facebook')} className="text-blue-600">Facebook</a>
          <a href="#" onClick={() => onShare('twitter')} className="text-blue-400">Twitter</a>
          <a href="#" onClick={() => onShare('linkedin')} className="text-blue-800">LinkedIn</a>
        </div>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default ShareModal;
