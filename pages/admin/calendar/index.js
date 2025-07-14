import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

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
    <div className="p-6">
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
          {/* Toggle switchleri istersen buraya ekleriz */}
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
  );
};

export default CalendarPage;
