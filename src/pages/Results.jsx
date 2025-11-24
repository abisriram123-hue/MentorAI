import React from 'react';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { Trophy, Star, RotateCcw, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Results = () => {
    const { xp } = useApp();
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Card */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Simulation Results</h1>
                        <p className="text-gray-500">Detailed feedback from your recent conversation.</p>

                        <div className="flex gap-2 mt-6">
                            {['Active Listener', 'Empathy Master', 'Clear Communicator'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-1">1250</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">XP Earned</div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/scenarios')}
                        className="flex-1 py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={20} /> Start New Scenario
                    </button>
                    <button
                        onClick={() => navigate('/simulation')}
                        className="flex-1 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                        <MessageSquare size={20} /> Review Conversation
                    </button>
                </div>

                {/* Detailed Stats */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-6">Skill Scores</h3>
                    <div className="space-y-6">
                        {[
                            { label: 'Empathy', val: 85 },
                            { label: 'Clarity', val: 70 },
                            { label: 'Conflict Handling', val: 60 },
                            { label: 'Active Listening', val: 78 }
                        ].map(skill => (
                            <div key={skill.label}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-700">{skill.label}</span>
                                    <span className="font-bold text-gray-900">{skill.val}%</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.val}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Feedback */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-6">Mistake Map & Optimized Alternatives</h3>
                    <p className="text-gray-500 mb-4">Review specific points where your responses could be improved.</p>

                    <div className="p-4 bg-red-50 rounded-xl border border-red-100 mb-4">
                        <p className="text-red-800 font-medium mb-2">Your response:</p>
                        <p className="text-red-600 italic">"I don't think that's a good idea, it sounds like too much work."</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-green-800 font-medium mb-2">Better alternative:</p>
                        <p className="text-green-600 italic">"I have some concerns about the workload. Could we explore ways to streamline the process?"</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Results;
