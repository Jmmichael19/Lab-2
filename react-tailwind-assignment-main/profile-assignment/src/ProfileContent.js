import React from "react";

function ProfileContent() {
  return (
    <main className="flex-1 p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">PERSONAL INFORMATION</h1>
      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> John Michael N. Pugales</p>
        <p><strong>Age:</strong> 21</p>
        <p><strong>Birthday:</strong> September 6, 2004</p>
        <p><strong>Occupation:</strong> BSIT Student</p>
        <p><strong>Hobbies:</strong> Gaming, Traveling, Dancing, Calligraphy</p>
      </div>
    </main>
  );
}

export default ProfileContent;
