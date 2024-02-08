import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/contact/ContactPage'
import { RootLayout } from './pages/RootLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Route */}
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
