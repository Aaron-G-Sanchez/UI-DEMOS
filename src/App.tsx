import './App.scss'
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar'

export const App = () => {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="page-container">
        <Navbar />
        <div className="sidebar-main-container">
          <Sidebar />
          <main className="display-container">
            <p>content</p>
          </main>
        </div>
      </div>
    </>
  )
}
