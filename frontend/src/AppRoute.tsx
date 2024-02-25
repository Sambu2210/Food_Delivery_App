import { Navigate, Route, Routes } from 'react-router'
import Layout from './layouts/Layout'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout>Home Page</Layout>}/>
        <Route path='/user-profile' element={<span>User Profile Page</span>}/>
        <Route path='/*' element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default AppRoute
