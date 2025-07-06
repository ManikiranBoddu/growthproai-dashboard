import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Phone, MapPin, Clock, Star, Target, Zap, Globe, MessageCircle } from 'lucide-react';

const Dashboard = () => {
  const [businessData, setBusinessData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({ name: '', location: '', category: 'restaurant' });
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sample enhanced data
  const sampleData = {
    name: "Café Delight",
    location: "Mumbai",
    category: "restaurant",
    rating: 4.6,
    reviews: 234,
    headline: "Why Café Delight is Mumbai's Coffee Paradise in 2025",
    analytics: {
      monthlyVisitors: 3245,
      phoneCallsThisMonth: 187,
      websiteClicks: 1456,
      directionsRequests: 892,
      averageVisitDuration: "2.5 hours",
      peakHours: ["08:00-10:00", "14:00-16:00", "19:00-21:00"],
      topKeywords: ["best coffee mumbai", "cafe near me", "breakfast place"],
      conversionRate: 12.5,
      competitorRanking: 2,
      totalCompetitors: 23
    },
    weeklyVisitors: [
      { day: 'Mon', visitors: 420 },
      { day: 'Tue', visitors: 380 },
      { day: 'Wed', visitors: 450 },
      { day: 'Thu', visitors: 520 },
      { day: 'Fri', visitors: 680 },
      { day: 'Sat', visitors: 750 },
      { day: 'Sun', visitors: 620 }
    ],
    reviewSentiment: [
      { name: 'Positive', value: 78, color: '#10B981' },
      { name: 'Neutral', value: 18, color: '#F59E0B' },
      { name: 'Negative', value: 4, color: '#EF4444' }
    ],
    recentReviews: [
      { author: "Sarah M.", rating: 5, text: "Amazing coffee and great atmosphere!", time: "2 hours ago" },
      { author: "John D.", rating: 4, text: "Good food but service could be faster.", time: "1 day ago" },
      { author: "Emily R.", rating: 5, text: "Perfect spot for meetings and work.", time: "3 days ago" }
    ]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setBusinessData(sampleData);
      setLoading(false);
    }, 1500);
  };

  const generateNewHeadline = () => {
    const headlines = [
      `Why ${formData.name} is ${formData.location}'s Hidden Gem in 2025`,
      `${formData.name} - ${formData.location}'s Top-Rated ${formData.category} You Can't Miss`,
      `Discover Why ${formData.name} is Taking ${formData.location} by Storm`,
      `${formData.name}: The Ultimate ${formData.location} Experience Awaits`,
      `Local Favorite: ${formData.name} Dominates ${formData.location}'s ${formData.category} Scene`
    ];
    
    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    setBusinessData(prev => ({ ...prev, headline: randomHeadline }));
  };

  const MetricCard = ({ icon: Icon, label, value, change, color = "blue" }) => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
          {change && (
            <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
              <TrendingUp className="h-4 w-4 mr-1" />
              {change > 0 ? '+' : ''}{change}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        active
          ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'} shadow-lg`
          : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
      }`}
    >
      {label}
    </button>
  );

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-64">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Zap className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>GrowthProAI</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Advanced Business Analytics</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-80 transition-colors`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!businessData ? (
          <div className="max-w-md mx-auto">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get Started</h2>
              
              {loading ? (
                <LoadingSpinner />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your business name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your location"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Business Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    >
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail</option>
                      <option value="service">Service</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="beauty">Beauty & Spa</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Analyze My Business
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Business Header */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{businessData.name}</h2>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <MapPin className="h-4 w-4 mr-1" />
                      {businessData.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <span className="text-3xl font-bold text-yellow-500">{businessData.rating}</span>
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{businessData.reviews} reviews</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-4 overflow-x-auto">
              <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
              <TabButton id="analytics" label="Analytics" active={activeTab === 'analytics'} onClick={setActiveTab} />
              <TabButton id="content" label="Content" active={activeTab === 'content'} onClick={setActiveTab} />
              <TabButton id="reviews" label="Reviews" active={activeTab === 'reviews'} onClick={setActiveTab} />
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard icon={Users} label="Monthly Visitors" value={businessData.analytics.monthlyVisitors.toLocaleString()} change={15.2} />
                <MetricCard icon={Phone} label="Phone Calls" value={businessData.analytics.phoneCallsThisMonth} change={8.5} color="green" />
                <MetricCard icon={Globe} label="Website Clicks" value={businessData.analytics.websiteClicks} change={-2.1} color="purple" />
                <MetricCard icon={MapPin} label="Directions" value={businessData.analytics.directionsRequests} change={12.8} color="orange" />
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Weekly Visitors</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={businessData.weeklyVisitors}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Review Sentiment</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={businessData.reviewSentiment}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {businessData.reviewSentiment.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI-Generated Content</h3>
                <div className="space-y-4">
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                    <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>SEO Headline</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} italic mb-3`}>"{businessData.headline}"</p>
                    <button
                      onClick={generateNewHeadline}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                    >
                      🔄 Generate New Headline
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Reviews</h3>
                <div className="space-y-4">
                  {businessData.recentReviews.map((review, index) => (
                    <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{review.author}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{review.time}</span>
                      </div>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;