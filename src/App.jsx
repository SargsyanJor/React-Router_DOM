import { User } from './components/User/User'
import { UserParams } from './components/userParams/UserParams'
import { Albums } from './components/Albums/Albums'
import { Posts } from './components/Posts/Posts'
import { Product } from './components/Product/Product'
import { Comments } from './components/Comments/Comments'
import { Routes, Route } from "react-router-dom"
import { NotFound } from './components/NotFound/NotFound'
import { Layout } from './components/Layout/Layout'

import './App.css'

function App({ post }) {

  return (
    <>


      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<User />} />
          <Route path='/:id' element={<UserParams />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/posts' element={<Posts post={post} />} />
          <Route path='/posts/:id' element={<Product post={post} />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='*' element={<NotFound />} />

        </Route>


      </Routes>

    </>
  )
}

export default App
