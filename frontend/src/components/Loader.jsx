import React from "react";

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <div className='animate-spin rounded-full h-12 w-12 sm:w-14 sm:h-14 border-4 border-gray-300 border-t-blue-700'></div>
            <div className='mt-2'>Please wait...</div>
        </div>
    );
};

export default Loader;
