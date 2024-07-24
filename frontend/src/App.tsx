import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import AllRoutes from './components/AllRoutes/AllRoutes'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { rootColors } from './Utilities/rootColors'

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div style={{ background: rootColors?.bgColor, color: rootColors?.text }}>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <AllRoutes />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
