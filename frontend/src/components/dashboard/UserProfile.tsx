import React from 'react'; // Add this import

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg overflow-hidden text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-400 mb-2">Welcome back, {user.name}!</h2>
        <p className="text-gray-400 mb-6">Manage your profile and view your study progress</p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-indigo-500">
            <img src={user.image || '/placeholder.svg'} alt={user.name} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-medium">{user.name}</h3>
            <p className="text-gray-400">{user.email}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">Premium Member</span>
              <span className="px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-xs">
                Study Streak: 7 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}