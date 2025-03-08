import React from 'react'; // Add this import

interface StudyProgressProps {
  progress: {
    overall: number;
    subjects: {
      name: string;
      progress: number;
    }[];
    weeklyActivity: {
      day: string;
      hours: number;
    }[];
  };
}

export default function StudyProgress({ progress }: StudyProgressProps) {
  return (
    <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg overflow-hidden text-white h-full">
      <div className="p-6">
        <h2 className="text-xl font-bold text-indigo-400 mb-2">Study Progress</h2>
        <p className="text-gray-400 text-sm mb-6">Track your learning journey</p>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Overall Progress</h4>
              <span className="text-indigo-400 font-bold">{progress.overall}%</span>
            </div>
            <div className="h-2 bg-[#333] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${progress.overall}%` }}></div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Subjects</h4>
            {progress.subjects.map((subject) => (
              <div key={subject.name} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span>{subject.name}</span>
                  <span>{subject.progress}%</span>
                </div>
                <div className="h-1.5 bg-[#333] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      subject.progress > 75
                        ? 'bg-emerald-500'
                        : subject.progress > 50
                          ? 'bg-indigo-500'
                          : 'bg-amber-500'
                    }`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h4 className="text-sm font-medium mb-4">Weekly Activity</h4>
            <div className="h-[150px] relative">
              <div className="absolute inset-0 flex items-end">
                {progress.weeklyActivity.map((day, index) => {
                  const maxHours = Math.max(...progress.weeklyActivity.map((d) => d.hours));
                  const height = (day.hours / maxHours) * 100;

                  return (
                    <div key={day.day} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full max-w-[20px] bg-indigo-500 rounded-t-sm mx-auto"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-gray-400 mt-2">{day.day}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}