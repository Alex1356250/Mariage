import React from 'react';
import { events } from '../data/events';
import { Clock, MapPin } from 'lucide-react';

const Programme = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-12">Programme</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-serif text-gray-800 mb-4">{event.title}</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <span>{event.date} à {event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span>{event.location}</span>
                </div>
                <p className="pt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programme;