import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Scenarios = () => {
    const navigate = useNavigate();
    const { setActiveScenario } = useApp();
    const [filterDifficulty, setFilterDifficulty] = useState([]);

    const scenarios = [
        {
            id: 1,
            title: 'Difficult Performance Review',
            desc: 'Navigate a sensitive conversation with an underperforming team member.',
            difficulty: 'Hard',
            xp: 350,
            tags: ['Leadership', 'Empathy']
        },
        {
            id: 2,
            title: 'Resource Negotiation',
            desc: 'Negotiate for additional budget and personnel for a critical project.',
            difficulty: 'Medium',
            xp: 200,
            tags: ['Negotiation', 'Communication']
        },
        {
            id: 3,
            title: 'Conflict with Team Member',
            desc: 'Address a recurring conflict between two team members.',
            difficulty: 'Hard',
            xp: 300,
            tags: ['Conflict Resolution']
        },
        {
            id: 4,
            title: 'Onboarding a New Hire',
            desc: 'Effectively onboard a new team member, making them feel welcome.',
            difficulty: 'Easy',
            xp: 150,
            tags: ['Leadership']
        },
        {
            id: 5,
            title: 'Client Pitch Presentation',
            desc: 'Deliver a compelling pitch to a prospective client.',
            difficulty: 'Medium',
            xp: 250,
            tags: ['Communication', 'Sales']
        },
        {
            id: 6,
            title: 'Delegating Tasks Effectively',
            desc: 'Learn to delegate responsibilities clearly and efficiently.',
            difficulty: 'Easy',
            xp: 100,
            tags: ['Management']
        }
    ];

    const handleStart = (scenario) => {
        setActiveScenario(scenario);
        navigate('/simulation');
    };

    const toggleFilter = (diff) => {
        setFilterDifficulty(prev =>
            prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
        );
    };

    const filteredScenarios = scenarios.filter(s =>
        filterDifficulty.length === 0 || filterDifficulty.includes(s.difficulty)
    );

    return (
        <Layout>
            <div className="flex gap-8">
                {/* Filters Sidebar */}
                <div className="w-64 flex-shrink-0 space-y-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Filter size={20} /> Filters
                        </h3>

                        <div className="mb-6">
                            <h4 className="font-medium text-gray-700 mb-3">Difficulty</h4>
                            <div className="space-y-2">
                                {['Easy', 'Medium', 'Hard'].map(diff => (
                                    <label key={diff} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="rounded text-primary focus:ring-primary"
                                            checked={filterDifficulty.includes(diff)}
                                            onChange={() => toggleFilter(diff)}
                                        />
                                        <span className="text-gray-600">{diff}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-700 mb-3">Skill Focus</h4>
                            <div className="space-y-2">
                                {['Communication', 'Conflict Resolution', 'Empathy', 'Leadership', 'Negotiation'].map(skill => (
                                    <label key={skill} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                        <span className="text-gray-600">{skill}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search scenarios..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {filteredScenarios.map(scenario => (
                            <div key={scenario.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-2 text-gray-900">{scenario.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{scenario.desc}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4 mb-6">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${scenario.difficulty === 'Hard' ? 'bg-red-50 text-red-600' :
                                            scenario.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-600' :
                                                'bg-green-50 text-green-600'}`}>
                                        {scenario.difficulty}
                                    </span>
                                    <span className="text-sm font-bold text-primary">{scenario.xp} XP</span>
                                </div>

                                <button
                                    onClick={() => handleStart(scenario)}
                                    className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100"
                                >
                                    Start
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Scenarios;
