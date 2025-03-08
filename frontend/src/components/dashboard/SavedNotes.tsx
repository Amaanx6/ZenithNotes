import { BookMarked } from "lucide-react"
import React from 'react';

interface Note {
  id: number
  title: string
  date: string
  category: string
}

interface SavedNotesProps {
  notes: Note[]
}

export default function SavedNotes({ notes }: SavedNotesProps) {
  return (
    <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg overflow-hidden text-white h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-indigo-400">Saved Notes</h2>
            <p className="text-gray-400 text-sm">Your bookmarked and important notes</p>
          </div>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">View All</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-[#252525] border border-[#333] rounded-lg p-4 hover:border-indigo-500/50 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="bg-indigo-900/30 p-2 rounded-lg">
                  <BookMarked className="h-4 w-4 text-indigo-400" />
                </div>
                <span className="text-xs px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full">{note.category}</span>
              </div>
              <h4 className="font-medium text-sm mb-2 line-clamp-2">{note.title}</h4>
              <p className="text-xs text-gray-400">
                Saved on{" "}
                {new Date(note.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

