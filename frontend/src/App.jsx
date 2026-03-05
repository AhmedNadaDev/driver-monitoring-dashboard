import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import AppLayout from './layout/AppLayout.jsx'
import OverviewPage from './features/overview/OverviewPage.jsx'
import DriversPage from './features/drivers/DriversPage.jsx'
import DriverDetailsPage from './features/drivers/DriverDetailsPage.jsx'
import AddDriverPage from './features/drivers/AddDriverPage.jsx'
import TripsPage from './features/trips/TripsPage.jsx'
import TripDetailsPage from './features/trips/TripDetailsPage.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/drivers/new" element={<AddDriverPage />} />
          <Route path="/drivers/:id" element={<DriverDetailsPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trips/:id" element={<TripDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App

