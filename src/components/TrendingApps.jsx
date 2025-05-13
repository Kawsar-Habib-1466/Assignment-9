import React from 'react';
import Card1 from '@/assets/card-1.jpg'
import Card2 from '@/assets/card-2.jpg'
import Card3 from '@/assets/card-3.jpg'
import Card4 from '@/assets/card-4.jpg'
// Dummy data – replace with your JSON data or props
const trendingApps = [
  {
    id: 'app1',
    name: 'FitTrack Pro',
    downloads: '2.3M',
    rating: 4.8,
    category: 'Health',
    thumbnail:Card1,
  },
  {
    id: 'app2',
    name: 'Calm Mind',
    downloads: '5.7M',
    rating: 4.9,
    category: 'Health',
    thumbnail:Card2,
  },
  {
    id: 'app3',
    name: 'TaskMaster',
    downloads: '3.8M',
    rating: 4.1,
    category: 'Productivity',
    thumbnail:Card3,
  },
  {
    id: 'app4',
    name: 'LinguaLearn',
    downloads: '4.2M',
    rating: 4.7,
    category: 'Education',
    thumbnail:Card4,
  },
];

const TrendingApps = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Trending Apps</h2>
          <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center">
            View all
            <span className="ml-1">
              <i className="ri-arrow-right-line" />
            </span>
          </a>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingApps.map((app) => (
            <div
              key={app.id}
              className="app-card bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 bg-gray-100 relative">
                <img
                  src={app.thumbnail}
                  alt={app.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
                  {app.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
                <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 text-sm">
  {[...Array(5)].map((_, i) => {
    const stars = Math.round(app.rating * 2) / 2;
    return (
      <i
        key={i}
        className={
          stars >= i + 1
            ? 'ri-star-fill'
            : stars === i + 0.5
            ? 'ri-star-half-fill'
            : 'ri-star-line'
        }
      />
    );
  })}
</div>

                  <span className="text-sm text-gray-500 ml-1">{app.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="ri-download-line mr-1" />
                  {app.downloads} downloads
                </div>
                <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 ">
                  Get
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
