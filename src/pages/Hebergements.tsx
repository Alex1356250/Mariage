import { accommodations } from '../data/accommodations';
import { Phone, Mail, Globe, MapPin, Bed } from 'lucide-react';
import wip from '../public/media/wip.png';

const Hebergements = () => {

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-12">Hébergements</h1>
        <div className="space-y-4 text-center">
          <p className="text-gray-600">
            Vous trouverez bientôt dans cette section la liste d'hébergements à proximité du lieu de la cérémonie.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={wip} alt="WorkInProgress" className="w-full object-cover flex justify-items-center" />
          </div>
          {accommodations.map((accommodation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif text-gray-800">{accommodation.name}</h3>
                  <p className="text-rose-500">{accommodation.distance}</p>
                </div>
                <p className="text-gray-600">{accommodation.description}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-rose-500" />
                    <span>{accommodation.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-rose-500" />
                    <span>{accommodation.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-rose-500" />
                    <a href={`tel:${accommodation.phone}`} className="hover:text-rose-500">
                      {accommodation.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-rose-500" />
                    <a href={`mailto:${accommodation.email}`} className="hover:text-rose-500">
                      {accommodation.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-rose-500" />
                    <a
                      href={accommodation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-rose-500"
                    >
                      Site web
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hebergements;