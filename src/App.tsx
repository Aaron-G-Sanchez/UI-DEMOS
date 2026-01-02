import './App.scss'
import { Navbar } from './components/navbar/Navbar'

export const App = () => {
  return (
    <>
      <div className="bg-grid"></div>
      <main>
        <Navbar />
      </main>
    </>
  )
}
