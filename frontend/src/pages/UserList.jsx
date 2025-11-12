import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const UserList = () => {

    const {
        users,
        setShowSureDelete,
        setDelUserId,
        setShowUserForm,
        setUserFormState,
        setUserFormId,
        setUserFormName,
        setUserFormEmail,
        setUserFormRole,
        searchQuery,
        setSearchQuery,
    } = useAppContext()

    const [filteredUsers, setFilteredUsers] = useState([])
    const [sortBy, setSortBy] = useState('id')
    const [order, setOrder] = useState('asc')

    // filter + sort
    useEffect(() => {
        let updatedUsers = [...users]

        // filter by search query
        if (searchQuery.trim() !== "") {
            updatedUsers = updatedUsers.filter(user =>
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        // sort the filtered list
        updatedUsers.sort((a, b) => {
            let valA = a[sortBy]
            let valB = b[sortBy]

            if (typeof valA === 'string') valA = valA.toLowerCase()
            if (typeof valB === 'string') valB = valB.toLowerCase()

            if (valA < valB) return order === 'asc' ? -1 : 1
            if (valA > valB) return order === 'asc' ? 1 : -1
            return 0
        })

        setFilteredUsers(updatedUsers)
    }, [users, searchQuery, sortBy, order])

    // Handle sort click
    const handleSort = (field) => {
        if (sortBy === field) {
            setOrder(order === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(field)
            setOrder('asc')
        }
    }

    return (
        <div className='p-3'>
            <h1 className="text-2xl font-bold mb-4 text-center">User Management App</h1>

            {/* create button */}
            <button
                onClick={() => {
                    setUserFormState('create')
                    setShowUserForm(true)
                }}
                className="mt-3 px-4 py-2 text-sm font-medium text-white bg-green-700 cursor-pointer rounded-lg hover:bg-green-800 focus:outline-none">
                Create
            </button>

            {/* search */}
            <div className="mt-3 mb-4 flex items-center gap-2">
                <input
                    type="text"
                    placeholder="search user by email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>

            <div className="overflow-x-auto mt-4">
                {!filteredUsers.length ? (<div className='w-full mt-2
                        text-xl font-medium text-center text-gray-700'>No user available</div>) :
                    (<table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 cursor-pointer whitespace-nowrap"
                                    onClick={() => handleSort("id")}
                                >
                                    ID {sortBy === "id" && (order === "asc" ? "↑" : "↓")}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 cursor-pointer"
                                    onClick={() => handleSort("name")}
                                >
                                    Name {sortBy === "name" && (order === "asc" ? "↑" : "↓")}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 cursor-pointer"
                                    onClick={() => handleSort("email")}
                                >
                                    Email {sortBy === "email" && (order === "asc" ? "↑" : "↓")}
                                </th>
                                <th scope="col" className="px-6 py-3 w-70">Role</th>
                                <th scope="col" className="px-6 py-3 w-70">Status</th>
                                <th scope="col" className="px-6 py-3 w-70">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr
                                    key={user.id}
                                    className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
                                >
                                    <td className="px-6 py-2 font-medium text-gray-900">{user.id}</td>
                                    <td className="px-6 py-2 text-gray-700">{user.name}</td>
                                    <td className="px-6 py-2 text-gray-700">{user.email}</td>
                                    <td className="px-6 py-2 text-gray-700">{user.role}</td>
                                    <td className="px-6 py-2 text-gray-700">{user.status}</td>

                                    <td className="px-6 py-2 flex flex-col gap-1 sm:flex-row">
                                        <button
                                            className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none"
                                            onClick={() => {
                                                setUserFormId(user.id)
                                                setUserFormName(user.name)
                                                setUserFormEmail(user.email)
                                                setUserFormRole(user.role)
                                                setUserFormState("Modify")
                                                setShowUserForm(true)
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => {
                                                setDelUserId(user.id)
                                                setShowSureDelete(true)
                                            }}
                                            className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>)
                }
            </div>
        </div>
    )
}

export default UserList
