import { Header } from './components/Header/Header'
import { User } from './components/User/User'
import { Albums } from './components/Albums/Albums'
import { Posts } from './components/Posts/Posts'
import { Comments } from './components/Comments/Comments'
import { Routes, Route } from "react-router-dom"

import './App.css'
import { NotFound } from './components/NotFound/NotFound'

function App({user,albums,post,comments}) {

  return (
    <>
      <Header />

      <Routes>
        
        <Route path='/user' element={<User user={user} />} />
        <Route path='/albums' element={<Albums  albums={albums}/>} />
        <Route path='/posts' element={<Posts post={post} />} />
        <Route path='/comments' element={<Comments comments={comments} />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>

    </>
  )
}

export default App
