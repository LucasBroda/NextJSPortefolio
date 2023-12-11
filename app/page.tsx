import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    
    <main className='flex min-h-screen flex-col bg-neutral-900'>
      <Navbar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <Header/>
      </div>
    </main>
  )
}
