import React from 'react'; // Add this import
import { FileText, FileType, Clock } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  date: string;
  type: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg overflow-hidden text-white h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-indigo-400">Recent Activity</h2>
            <p className="text-gray-400 text-sm">Your recently accessed notes and documents</p>
          </div>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">View All</button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors cursor-pointer"
            >
              <div className="bg-indigo-900/30 p-2 rounded-lg">
                {activity.type === 'note' ? (
                  <FileText className="h-5 w-5 text-indigo-400" />
                ) : (
                  <FileType className="h-5 w-5 text-indigo-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium truncate">{activity.title}</h4>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>
                    {new Date(activity.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}