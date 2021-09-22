import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchandSongs from './components/SearchandSongs'
import { Container } from 'react-bootstrap'
import MainNavBar from './components/MainNavBar'

function App() {
  return (
    <>
      <MainNavBar />
      <Container>
        <main>
          <SearchandSongs title="test"/>
        </main>
      </Container>
    </>
  )
}
export default App
