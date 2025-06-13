import React, { useState } from 'react';

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];
  for (let i = 0; i < firstDayIndex; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="text-lg font-bold px-3 py-1 rounded hover:bg-gray-100">&larr;</button>
        <h2 className="text-xl font-semibold text-gray-800">
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </h2>
        <button onClick={nextMonth} className="text-lg font-bold px-3 py-1 rounded hover:bg-gray-100">&rarr;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-gray-600 font-medium">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-sm">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2">
        {days.map((date, idx) => {
          const isToday = date === today.getDate() &&
                          month === today.getMonth() &&
                          year === today.getFullYear();

          return (
            <div key={idx} className="h-10 flex items-center justify-center">
              {date ? (
                <span className={`w-8 h-8 flex items-center justify-center rounded-full 
                  ${isToday ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-blue-100'} 
                  cursor-pointer text-sm font-medium`}>
                  {date}
                </span>
              ) : (
                <span></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
