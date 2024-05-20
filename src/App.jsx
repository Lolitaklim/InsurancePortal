import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Insurance from './components/Insurance/Insurance'
import Contacts from './components/Contacts/Contacts'
import NotFound from './components/NotFound/NotFound'
import MainLayout from './layouts/MainLayout'
import HowWeWork from './components/HowWeWork/HowWeWork'
import UsefulInfo from './components/UsefulInfo/UsefulInfo'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />} path="/">
            <Route element={<Home />} index />
            <Route element={<Insurance />} path="insurance" />
            <Route element={<HowWeWork />} path="how-we-work" />
            <Route element={<UsefulInfo />} path="useful-info" />
            <Route element={<Contacts />} path="contacts" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
