import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <main className="main">
        <UserList></UserList>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
