import React from 'react';
import Sidebar from './Sidebar';
import { User } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 ml-64">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">Level 7 Learner</p>
                        </div>
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                            <User size={20} className="text-gray-600" />
                        </div>
                    </div>
                </header>
                <div className="p-8 animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
