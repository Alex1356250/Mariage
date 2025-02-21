import { Calendar } from 'lucide-react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <h1 className="text-6xl font-serif">Alex & Sophie</h1>
            <p className="text-2xl">23 Mai 2026</p>
            <AddToCalendarButton
              name="Mariage Alex & Sophie"
              options={['Apple','Google']}
              location="Château des Roses, Paris"
              startDate="2026-05-23"
              endDate="2026-05-24"
              startTime="14:30"
              endTime="23:59"
              timeZone="Europe/Paris"
              buttonStyle="light"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-serif text-gray-800">Notre Histoire</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous sommes ravis de vous inviter à célébrer notre union. 
            Cette journée sera remplie d'amour, de joie et de moments inoubliables 
            que nous souhaitons partager avec vous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;