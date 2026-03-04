import React from 'react';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';
import TaskCompletedCard from '../TaskCompletedCard/TaskCompletedCard';

const TaskStatusContainer = ({ inProgressTasks, completedTasks, handleCompletedTask }) => {
  console.log(inProgressTasks.length)
  return (

    <div className='col-span-1'>
      <h2 className='text-2xl font-bold text-left md:mt-16  mb-5'>Task Status</h2>
      <div className='space-y-4'>

        {inProgressTasks.length === 0 ? (
          <p className='text-gray-600'>Select a ticket to add to Task Status</p>) :
          (inProgressTasks.map(task => <TaskStatusCard
            key={task.id}
            task={task}
            handleCompletedTask={handleCompletedTask}
          ></TaskStatusCard>))}

      </div>
      <h2 className='text-2xl font-bold text-left md:mt-6  mb-5'>Resolved Task</h2>
      <div className='space-y-4'>

        {completedTasks.length === 0 ? (
          <p className='text-gray-600'>No resolved task yet</p>) :
          (completedTasks.map(task => <TaskCompletedCard
            key={task.id}
            task={task}
          ></TaskCompletedCard>))}

      </div>
    </div>
  );
};

export default TaskStatusContainer;