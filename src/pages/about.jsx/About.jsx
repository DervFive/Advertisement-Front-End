import React from 'react';

const About = () => {
  const appDetails = {
    name: 'TradeWave',
    version: '1.0.0',
    buildNumber: '20241025', // Example build number format
    team: 'derv5',
    description: 'TradeWave is a comprehensive advertisement management platform that empowers users to manage, search, and filter ads with ease.',
    releaseDate: 'October 25, 2024',
    contactEmail: 'support@tradeWave.com',
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-4">About {appDetails.name}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{appDetails.description}</p>

      <div className="space-y-2 text-gray-600 dark:text-gray-400">
        <div className="flex justify-between">
          <span className="font-medium">App Version:</span>
          <span>{appDetails.version}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Build Number:</span>
          <span>{appDetails.buildNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Team:</span>
          <span>{appDetails.team}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Release Date:</span>
          <span>{appDetails.releaseDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Contact Email:</span>
          <span>{appDetails.contactEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default About;
