import React from 'react';

const SettingsPage = () => {
  const settingsItems = [
    { name: "General" },
    { name: "Display" },
    { name: "Notifications" },
    { name: "Privacy" },
    { name: "Help" },
    { name: "Update" },
    { name: "Account" },
    { name: "Billing" },
    { name: "Security" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-8">Settings</h1>
      <div className="settings-bg min-h-screen flex justify-center py-10 px-4">
        <div className="w-full max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {settingsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer duration-300"
              >
                <h2 className="text-lg font-medium">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
