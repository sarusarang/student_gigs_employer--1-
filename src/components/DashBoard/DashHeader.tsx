// File: src/components/Dashboard/DashboardHeader.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface DashboardHeaderProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Job Dashboard</h1>
                <p className="text-gray-500">Manage your job postings and applicants</p>
            </div>

            <div className="mt-4 md:mt-0 relative w-full md:w-64">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
        </div>
    );
};

export default DashboardHeader;