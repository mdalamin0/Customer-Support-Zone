import { Suspense, use, useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import TicketsContainer from './Components/TicketsContainer/TicketsContainer'
import TaskStatusContainer from './Components/TaskStatusContainer/TaskStatusContainer'
import Footer from './Components/Footer/Footer'


const fetchCustomerTickets = async () => {
  const res = await fetch("/Tickets.json");
  return res.json();
}
const promiseTickets = fetchCustomerTickets();


function App() {
  const ticketsData = use(promiseTickets);
  const [customerTickets, setCustomerTickets] = useState(ticketsData)
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (t) => {
    const alreadyAddedTask = inProgressTasks.find(task => task.id === t.id);
    if (alreadyAddedTask) {
      toast("Already added to Task List !")
      return;
    }
    setInProgressTasks([...inProgressTasks, t]);

    setCustomerTickets(prev =>
      prev.map(ticket =>
        ticket.id === t.id
          ? {
            ...ticket,
            status: "In Progress"
          }
          : ticket
      )

    );
    toast("Successfully added in task list !")
  }
  const handleCompletedTask = (t) => {
    setCompletedTasks([...completedTasks, t])
    const remainingTasks = inProgressTasks.filter(task => task.id !== t.id);
    setInProgressTasks(remainingTasks)
    toast("Task Completed Successfully !")
    const remainingTickets = customerTickets.filter(ticket => ticket.id !== t.id);
    setCustomerTickets(remainingTickets)
  }

  return (
    <div className='font-sor'>
      <NavBar></NavBar>
      <div className='bg-base-200 border-t-2 border-gray-100'>
        <Banner
          inProgressTasks={inProgressTasks}
          completedTasks={completedTasks}
        ></Banner>
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4'>
          <Suspense fallback={<p>Loading...</p>}>
            <TicketsContainer
              promiseTickets={promiseTickets}
              customerTickets={customerTickets}
              handleAddTask={handleAddTask}
            ></TicketsContainer>
          </Suspense>
          <TaskStatusContainer
            inProgressTasks={inProgressTasks}
            completedTasks={completedTasks}
            handleCompletedTask={handleCompletedTask}
          ></TaskStatusContainer>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
