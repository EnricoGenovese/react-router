import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Posts from './pages/Posts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/about' Component={AboutUs} />
            <Route path='/posts'>
              <Route index Component={Posts} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
