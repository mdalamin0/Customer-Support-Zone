import React from 'react';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';

const TaskStatusContainer = ({ inProgressTasks }) => {
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
          ></TaskStatusCard>))}

      </div>
    </div>
  );
};

export default TaskStatusContainer;