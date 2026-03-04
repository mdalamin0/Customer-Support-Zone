import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import TicketsContainer from './Components/TicketsContainer/TicketsContainer'


const fetchCustomerTickets = async () => {
  const res = await fetch("/public/Tickets.json");
  return res.json();
}


function App() {
  const promiseTickets = fetchCustomerTickets();

  return (
    <>
      <NavBar></NavBar>
      <div className='bg-base-200 border-t-2 border-gray-100'>
        <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <TicketsContainer promiseTickets={promiseTickets}></TicketsContainer>
      </Suspense>
      </div>
    </>
  )
}

export default App
