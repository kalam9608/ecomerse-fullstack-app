import React from 'react'
import AdminProductList from '../components/features/adminProduct/AdminProductList'
import NavBar from '../components/header/NavBar'

const AdminHome = () => {
  return (
    <div>
      <NavBar></NavBar>
      <AdminProductList></AdminProductList>
    </div>
  )
}

export default AdminHome
