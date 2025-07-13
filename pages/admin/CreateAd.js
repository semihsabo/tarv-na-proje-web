import React, { useState } from 'react';

const CreateAd = () => {
  const [platform, setPlatform] = useState(null);

  const platforms = [
    { name: 'Meta (Facebook & Instagram)', options: ['Feed Posts', 'Stories', 'Reels', 'Marketplace'] },
    { name: 'Google Ads', options: ['Search Ads', 'Display Network', 'YouTube', 'Shopping'] },
    { name: 'TikTok', options: ['In-Feed Video', 'Spark Ads', 'TopView', 'Brand Takeover'] }
  ];

  const handlePlatformSelect = (selectedPlatform) => {
    setPlatform(selectedPlatform);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Create Your Ad</h1>

      {/* Step 1: Choose Platform */}
      <div className="mb-6">
        <h2 className="text-2xl mb-4">Step 1: Choose Your Platform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((platformItem, index) => (
            <div
              key={index}
              onClick={() => handlePlatformSelect(platformItem)}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
            >
              <h3 className="text-lg font-semibold">{platformItem.name}</h3>
              <p className="mt-2 text-sm">Click to select</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2: Display Platform Options */}
      {platform && (
        <div className="mb-6">
          <h2 className="text-2xl mb-4">Step 2: Choose Your Ad Type for {platform.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {platform.options.map((option, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
                <h3 className="text-lg font-semibold">{option}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Next Button */}
      <div className="mt-6">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateAd;
