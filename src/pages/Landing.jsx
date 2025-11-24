import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 container mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Compass size={20} />
                    </div>
                    <span className="text-xl font-bold text-primary">MentorAI</span>
                </div>
                <div className="flex gap-4">
                    <button className="px-4 py-2 text-gray-600 font-medium hover:text-primary transition-colors">Login</button>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 container mx-auto px-8 flex items-center gap-12">
                <div className="flex-1 space-y-8">
                    <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                        MentorAI – Soft <br />
                        Skills Training <br />
                        Simulator
                    </h1>
                    <p className="text-xl text-gray-600 max-w-lg">
                        Practice real workplace conversations with AI. Master empathy, negotiation, and leadership in a risk-free environment.
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/scenarios')}
                            className="px-8 py-4 bg-primary text-white text-lg rounded-xl font-bold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-xl shadow-blue-200"
                        >
                            Start Simulation
                        </button>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="px-8 py-4 bg-white border border-gray-200 text-gray-700 text-lg rounded-xl font-bold hover:bg-gray-50 transition-all"
                        >
                            Dashboard
                        </button>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                    <img
                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000"
                        alt="AI Training"
                        className="relative rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500"
                    />
                </div>
            </main>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Unlock Your Potential</h2>
                    <div className="grid grid-cols-3 gap-8">
                        {[
                            { title: 'Realistic Simulations', desc: 'Engage in lifelike scenarios crafted to mirror real workplace challenges.' },
                            { title: 'Adaptive Feedback', desc: 'Receive instant, detailed insights on your communication style and empathy.' },
                            { title: 'Progress Tracking', desc: 'Monitor your skill growth over time and earn achievements.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl mb-6 flex items-center justify-center text-primary">
                                    <Compass size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
