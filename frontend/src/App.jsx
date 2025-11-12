import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserList from './pages/UserList'
import { useAppContext } from './context/AppContext'
import SureDelete from './components/SureDelete'
import UserForm from './components/UserForm'
import Toast from './components/Toast'
import Loader from './components/Loader'

const App = () => {

  const {
    showSureDelete,
    showUserForm,
    loading
  } = useAppContext()

  return (
    <div className='p-5'>
      <Toast />
      {loading && <Loader />}
      {showSureDelete ? <SureDelete /> : null}
      {showUserForm ? <UserForm /> : null}

      <Routes>
        <Route path='/' element={<UserList />}></Route>
      </Routes>
    </div>
  )
}

export default App