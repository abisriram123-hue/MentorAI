import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { Send, User, Bot, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Simulation = () => {
    const { activeScenario, addXp } = useApp();
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'ai',
            text: "Welcome! Let's simulate a challenging conversation. I'm Dr. Evelyn Reed, Senior Project Manager. I need to address a delay on a critical project. How would you like to start this conversation?"
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock AI Response & XP Logic
        setTimeout(() => {
            const isPositive = input.length > 20; // Simple mock logic
            const aiResponse = isPositive
                ? "That's a good approach. I appreciate your transparency. What specific steps can we take to mitigate the impact?"
                : "I'm not sure that fully addresses my concern. We need a more concrete plan.";

            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponse }]);

            if (isPositive) {
                addXp(50);
                // Could add a toast here for "+50 XP"
            } else {
                addXp(-10);
            }
        }, 1000);
    };

    const handleEndSimulation = () => {
        navigate('/results');
    };

    if (!activeScenario) {
        return (
            <Layout>
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-bold mb-4">No Active Scenario</h2>
                    <button onClick={() => navigate('/scenarios')} className="text-primary hover:underline">Go back to Scenarios</button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="h-[calc(100vh-8rem)] flex gap-6">
                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Active Scenario</div>
                            <h2 className="font-bold text-gray-900">{activeScenario.title}</h2>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500 text-xs">Empathy</span>
                                <span className="font-bold text-blue-600">75/100</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500 text-xs">Clarity</span>
                                <span className="font-bold text-blue-600">80/100</span>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 
                  ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                                    {msg.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
                                </div>
                                <div className={`max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                  ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                            {['Acknowledge her feelings', 'Propose concrete steps', 'Ask for clarification'].map(hint => (
                                <button
                                    key={hint}
                                    onClick={() => setInput(hint)}
                                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-600 transition-colors whitespace-nowrap"
                                >
                                    {hint}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your response here..."
                                className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                            <button
                                onClick={handleSend}
                                className="p-4 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100"
                            >
                                <Send size={24} />
                            </button>
                        </div>
                        <button
                            onClick={handleEndSimulation}
                            className="w-full mt-4 py-3 bg-blue-50 text-primary font-bold rounded-xl hover:bg-blue-100 transition-colors"
                        >
                            End Simulation
                        </button>
                    </div>
                </div>

                {/* Context Sidebar */}
                <div className="w-80 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                                alt="Character"
                                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                            />
                            <div>
                                <h3 className="font-bold text-gray-900">Dr. Evelyn Reed</h3>
                                <p className="text-xs text-gray-500">Senior Project Manager</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">Mood</span>
                                <span className="font-medium text-yellow-600">Thoughtful</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 w-2/3"></div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-sm text-gray-900">Background</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Dr. Reed is evaluating your performance on a critical project. She values clear communication and proactive problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Simulation;
