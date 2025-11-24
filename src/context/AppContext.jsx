import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [xp, setXp] = useState(1450);
    const [level, setLevel] = useState(7);
    const [activeScenario, setActiveScenario] = useState(null);
    const [recentScenarios, setRecentScenarios] = useState([
        {
            id: 1,
            title: 'Difficult Performance Review',
            score: 88,
            date: '2 days ago',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=200',
        },
        {
            id: 2,
            title: 'Resource Negotiation',
            score: 72,
            date: '1 week ago',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300&h=200',
        }
    ]);

    const addXp = (amount) => {
        setXp(prev => prev + amount);
    };

    return (
        <AppContext.Provider value={{
            xp,
            setXp,
            addXp,
            level,
            activeScenario,
            setActiveScenario,
            recentScenarios
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
