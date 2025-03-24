import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext'
import { SerachedStudents } from '../Hooks/SearchHook';




// search params types
interface SearchParams {
    category: string;
    location: string;
    salary_type: string;
    page: number;
}


// context types
interface StudentSearchContextType {
    searchParams: SearchParams;
    updateSearchParams: (params: Partial<SearchParams>) => void;
    searchResults: any;
    isLoading: boolean;
    isError: boolean;
    isFetching: boolean;
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}


// context
const StudentSearchContext = createContext<StudentSearchContextType | undefined>(undefined);


export function StudentSearchProvider({ children }: { children: React.ReactNode }) {


    // To check if the user is authenticated
    const { isAuthenticated } = useAuth();


    // search params
    const [searchParams, setSearchParams] = useState<SearchParams>({
        category: "",
        location: "",
        salary_type: "",
        page: 1,
    });


    // serached jobs
    const { data, isLoading, isError, isFetching, refetch } = SerachedStudents(searchParams);


    // update search params
    const updateSearchParams = (params: Partial<SearchParams>) => {
        setSearchParams((prev) => ({ ...prev, ...params }));
    };



    // Refetch data when `isAuthenticated` changes
    useEffect(() => {

        refetch();

    }, [isAuthenticated, refetch]);


    return (

        <StudentSearchContext.Provider
            value={{
                searchParams,
                updateSearchParams,
                searchResults: data,
                isLoading,
                isFetching,
                isError,
                page: searchParams.page,
                setPage: (page) => setSearchParams((prev) => ({ ...prev, page })),
                totalPages: data?.total_pages || 1,
            }}
        >
            {children}
        </StudentSearchContext.Provider>
    );

}



export const useStudentSearch = () => {
    const context = useContext(StudentSearchContext);
    if (!context) {
        throw new Error('useStudentSearch must be used within a StudentSearchProvider');
    }
    return context;
};