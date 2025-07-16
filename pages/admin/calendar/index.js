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
    <div className="p-2 sm:p-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
        <h1 className="text-lg sm:text-2xl font-bold">Calendar</h1>
        <div className="flex flex-wrap gap-2">
          <select
            className="border rounded px-3 py-1 text-sm sm:text-base"
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

      {/* Calendar Container */}
      <div className="bg-white rounded-none sm:rounded-lg shadow overflow-x-auto max-w-full">
        <div className="min-w-[320px] sm:min-w-0">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={filteredEvents}
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
