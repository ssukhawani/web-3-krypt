import { Footer, Navbar, Services, Transactions, Welcome } from "./components"

function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
