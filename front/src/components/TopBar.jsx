import   { useState } from 'react';

const TopBar = () => {
  const [activeTab, setActiveTab] = useState('Overview'); // Active tab state

  const tabs = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tokenomics',
  ];

  return (
    <div className="p-4 w-full flex items-center overflow-x-auto space-x-4 scrollbar-hide">
    <div className="flex space-x-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-medium px-4 py-2 rounded whitespace-nowrap ${
            activeTab === tab
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
  
    

  );
};

export default TopBar;
