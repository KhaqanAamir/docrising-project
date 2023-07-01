import React, { useState, useEffect } from 'react';
import '../../Styles/Calendar2.css'

const Calendar2 = () => {
  const [scheduler, setScheduler] = useState([]);
  const [newSlot, setNewSlot] = useState('');

  // Define the available slots here
  const [availableSlots, setAvailableSlots] = useState([
    '12:30', '13:00', '13:30', '14:00', '14:30', // Add more available slots as needed
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
  ]);

  useEffect(() => {
    generateScheduler();
  }, [availableSlots]);

  const generateScheduler = () => {
    const allSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const isAvailable = availableSlots.includes(time);
        allSlots.push({ time, isAvailable });
      }
    }
    setScheduler(allSlots);
  };
  const handleAddSlot = (e) => {
    e.preventDefault();
    if (newSlot && !availableSlots.includes(newSlot)) {
      setAvailableSlots((prevSlots) => [...prevSlots, newSlot]);
      setNewSlot('');
    }
  };

  return (
    <div className="scheduler-container">
      <h1 className="scheduler-title">Patient Scheduler</h1>
      <div className="scheduler">
        {scheduler.map((slot) => (
          <div
            key={slot.time}
            className={`time-slot ${slot.isAvailable ? 'available' : 'unavailable'}`}
            style={{ backgroundColor: slot.isAvailable ? 'green' : 'white' }}
          >
            {slot.time}
          </div>
        ))}
      </div>
      <form className="add-slot-form" onSubmit={handleAddSlot}>
        <input
          type="text"
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
          placeholder="Enter new slot (HH:MM)"
        />
        <button type="submit">Add Slot</button>
      </form>
    </div>
  );
};

export default Calendar2;
