import { Box } from '@mui/material'
import { Body } from './layout/Body'
import { Navbar } from './layout/Navbar'
import './styles.css'
function App() {

  return (
    <>
      <Navbar />
      <Box m={5} />
      <Body/>
    </>
  )
}

export default App
