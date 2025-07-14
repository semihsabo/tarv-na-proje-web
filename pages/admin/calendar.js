import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Sidebar from './Sidebar'; // Admin klasöründe ise doğru yolu ver

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meta Ad 1',
      date: '2025-07-14',
      platform: 'meta',
    },
    {
      title: 'Google Ad 1',
      date: '2025-07-18',
      platform: 'google',
    },
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const filteredEvents =
    selectedPlatform === 'all'
      ? events
      : events.filter((e) => e.platform === selectedPlatform);

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex gap-2">
            <select
              className="border rounded px-3 py-1"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="all">All</option>
              <option value="meta">Meta</option>
              <option value="google">Google</option>
              <option value="tiktok">TikTok</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={filteredEvents}
            height="auto"
          />
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
