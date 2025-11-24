import React from 'react';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { Trophy, Star, Activity, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { xp, level, recentScenarios } = useApp();
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="space-y-8">
                {/* Level Progress */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-1">Level {level}</h2>
                            <p className="text-gray-500">Keep practicing to reach Level {level + 1}</p>
                        </div>
                        <Trophy className="text-yellow-500" size={32} />
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-1000 ease-out"
                            style={{ width: `${(xp % 1000) / 10}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-500 font-medium">
                        <span>XP: {xp}</span>
                        <span>Next Level: {(Math.floor(xp / 1000) + 1) * 1000} XP</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {/* Skill Ratings */}
                    <div className="col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold mb-6">Skill Ratings</h3>
                        <div className="space-y-6">
                            {[
                                { label: 'Empathy', val: 75 },
                                { label: 'Communication', val: 82 },
                                { label: 'Conflict Handling', val: 68 }
                            ].map(skill => (
                                <div key={skill.label}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-700">{skill.label}</span>
                                        <span className="font-bold text-gray-900">{skill.val}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-400 rounded-full"
                                            style={{ width: `${skill.val}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div
                        onClick={() => navigate('/scenarios')}
                        className="bg-primary p-8 rounded-2xl shadow-lg shadow-blue-200 text-white flex flex-col justify-between cursor-pointer hover:bg-blue-600 transition-colors group"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Start New Scenario</h3>
                            <p className="text-blue-100">Ready to practice? Choose from 15+ new scenarios.</p>
                        </div>
                        <div className="self-end bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                            <ArrowRight size={24} />
                        </div>
                    </div>
                </div>

                {/* Recent Scenarios & Achievements */}
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 space-y-6">
                        <h3 className="text-xl font-bold">Recent Scenarios</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {recentScenarios.map(scenario => (
                                <div key={scenario.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <img src={scenario.image} alt="" className="w-full h-32 object-cover rounded-lg mb-4" />
                                    <h4 className="font-bold text-lg mb-1">{scenario.title}</h4>
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <span>Score: <span className="text-green-600 font-bold">{scenario.score}%</span></span>
                                        <span>{scenario.date}</span>
                                    </div>
                                    <button className="w-full mt-4 py-2 bg-blue-50 text-primary font-medium rounded-lg hover:bg-blue-100 transition-colors">
                                        Review
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6">Achievements</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Star, label: 'First Steps', color: 'text-green-500' },
                                { icon: Users, label: 'Master Communicator', color: 'text-purple-500' },
                                { icon: Activity, label: 'Empathy Expert', color: 'text-red-500' },
                                { icon: Trophy, label: 'Conflict Resolver', color: 'text-yellow-500' }
                            ].map((ach, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-gray-50">
                                    <ach.icon className={`mb-2 ${ach.color}`} size={24} />
                                    <span className="text-xs font-medium text-gray-600">{ach.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
