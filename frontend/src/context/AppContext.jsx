import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useEffect } from "react";
import toast from "react-hot-toast";

// Set a global base URL for all axios requests.
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// Allow axios to include cookies (e.g., session tokens) in every request.
axios.defaults.withCredentials = true;

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [showSureDelete, setShowSureDelete] = useState(false)
    const [delUserId, setDelUserId] = useState(null)
    const [showUserForm, setShowUserForm] = useState(false)
    const [userFormState, setUserFormState] = useState('create')
    const [userFormId, setUserFormId] = useState(null)
    const [userFormName, setUserFormName] = useState('')
    const [userFormEmail, setUserFormEmail] = useState('')
    const [userFormRole, setUserFormRole] = useState('')
    const [loading, setLoading] = useState(false);


    // fetch all active user
    const fetchActiveUsers = async () => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const { data } = await axios.get('/api/user');
                setUsers(data.data);
                setLoading(false);
            }, 1000)
            
        } catch (error) {
            console.log(error);
    }
}

    // user delete function --- it will inactive the status of the user
    const deleteUser = async () => {
        try {
            console.log(delUserId)
            const { data } = await axios.put(`/api/user/delete-user/${delUserId}`)
            fetchActiveUsers()
            toast.success(data.message)
        } catch (error) {
            toast.error(error)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchActiveUsers()
    }, [])


    const value = {
        users,
        setUsers,
        showSureDelete,
        setShowSureDelete,
        deleteUser,
        delUserId,
        setDelUserId,
        showUserForm,
        setShowUserForm,
        userFormState,
        setUserFormState,
        userFormId,
        setUserFormId,
        userFormName,
        setUserFormName,
        userFormEmail,
        setUserFormEmail,
        userFormRole,
        setUserFormRole,
        searchQuery,
        setSearchQuery,
        fetchActiveUsers,
        axios,
        loading
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}