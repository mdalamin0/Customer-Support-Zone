import React from 'react';

const TaskStatusCard = ({ task }) => {
  console.log(task)
  return (
    <div className='card shadow-sm bg-white p-3 space-y-4'>
      <h2 className='tex-sm font-semibold'>{task.title}</h2>
      <button className='btn bg-[#02A53B] text-white'>Complete</button>
    </div>
  );
};

export default TaskStatusCard;