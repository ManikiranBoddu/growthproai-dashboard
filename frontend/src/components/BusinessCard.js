import React from 'react';

const BusinessCard = ({ data, loading, error, onRegenerateHeadline }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <p>Enter business information to see analytics</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {data.name}
        </h3>
        <p className="text-gray-600 mb-4">📍 {data.location}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">
              {data.rating}★
            </div>
            <p className="text-sm text-gray-600">Google Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {data.reviews}
            </div>
            <p className="text-sm text-gray-600">Reviews</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-800 mb-3">
          AI-Generated SEO Headline
        </h4>
        <p className="text-gray-700 mb-4 italic">
          "{data.headline}"
        </p>
        <button
          onClick={onRegenerateHeadline}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
        >
          🔄 Regenerate SEO Headline
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;