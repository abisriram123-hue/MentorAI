import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Trophy, FileText, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: MessageSquare, label: 'Scenarios', path: '/scenarios' },
        { icon: Trophy, label: 'Achievements', path: '/achievements' }, // Will map to results or a placeholder
        { icon: FileText, label: 'Reports', path: '/reports' },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-10">
            <div className="p-6 flex items-center gap-2 border-b border-gray-100">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                    M
                </div>
                <span className="text-xl font-bold text-primary">MentorAI</span>
            </div>

            <nav className="flex-1 p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? 'bg-blue-50 text-primary font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <NavLink
                    to="/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    <Settings size={20} />
                    Settings
                </NavLink>
                <div className="mt-2 flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 cursor-pointer transition-colors">
                    <LogOut size={20} />
                    Sign Out
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
