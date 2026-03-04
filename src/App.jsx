import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import TicketsContainer from './Components/TicketsContainer/TicketsContainer'
import TaskStatusContainer from './Components/TaskStatusContainer/TaskStatusContainer'


const fetchCustomerTickets = async () => {
  const res = await fetch("/public/Tickets.json");
  return res.json();
}
const promiseTickets = fetchCustomerTickets();

function App() {
  const [inProgressTasks, setInProgressTasks] = useState([]);

  const handleAddTask = (t) => {
    setInProgressTasks([...inProgressTasks, t])
  }
  console.log(inProgressTasks)

  return (
    <>
      <NavBar></NavBar>
      <div className='bg-base-200 border-t-2 border-gray-100'>
        <Banner inProgressTasks={inProgressTasks}></Banner>
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4'>
          <Suspense fallback={<p>Loading...</p>}>
            <TicketsContainer
              promiseTickets={promiseTickets}
              handleAddTask={handleAddTask}
            ></TicketsContainer>
          </Suspense>
          <TaskStatusContainer inProgressTasks={inProgressTasks}></TaskStatusContainer>
        </div>
      </div>
    </>
  )
}

export default App
