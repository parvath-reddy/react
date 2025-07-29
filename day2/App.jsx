import Navbar from './components/navbar'
import Footer from './components/footer'
import Card from './components/card' // Correct import

function App() {
  return (
    <>
      <Navbar />
      <Card /> {/* Correct usage */}
      <div className="content container mx-auto p-4 bg-gray-400" style={{ marginTop: '60px' }}>
        <h1>Welcome to My First React App</h1>
        <p>This is a simple app to demonstrate components in React.</p>
        <p>Feel free to explore and modify the code!</p>
      </div>
      <Footer />
    </>
  )
}

export default App