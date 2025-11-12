import React from 'react'
import { useAppContext } from '../context/AppContext'

const SureDelete = () => {

    const {
        setShowSureDelete,
        deleteUser
    } = useAppContext()


    return (
        <div
            onClick={() => setShowSureDelete(false)}
            className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-black/50'>

            <div className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">

                <p className='text-center mb-2'>Are you sure you want to delete user?</p>

                {/* delete button */}
                <div className='w-full flex justify-center'>
                    <button className="w-40 bg-red-700 cursor-pointer hover:bg-red-800 p-2 rounded-xl text-white"
                        onClick={() => {
                          setShowSureDelete(false)
                          deleteUser()
                        }}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SureDelete