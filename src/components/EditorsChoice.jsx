import React from 'react';
import appsData from '@/data/apps_data.json'; // Make sure path is correct

const editorsChoiceApps = appsData.filter(app => app.editorsChoice).slice(0, 2);

const EditorsChoice = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Editor's Choice</h2>
          <a href="/editors-choice" className="text-primary hover:text-primary/80 font-medium flex items-center">
            View all
            <span className="ml-1">
              <i className="ri-arrow-right-line" />
            </span>
          </a>
        </div>

        {/* App Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {editorsChoiceApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Thumbnail */}
              <div className="md:w-2/5 h-60 md:h-auto bg-gray-100">
                <img
                  src={app.thumbnail}
                  alt={app.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                    Editor's Pick
                  </span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{app.name}</h3>
                <div className="flex items-center mb-3">
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
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{app.downloads} downloads</span>
                </div>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-button whitespace-nowrap">
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

export default EditorsChoice;
