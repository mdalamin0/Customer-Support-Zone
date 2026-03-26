import React from 'react';

const FAQ = () => {
  return (
    <div className='bg-base-200 border-t-2 border-gray-100'>
      <div className='w-11/12 mx-auto  py-24'>
        <div className='lg:w-6xl mx-auto space-y-3 h-[450px] overflow-auto'>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">How can I create a new support ticket?</div>
            <div className="collapse-content text-sm">To create a new support ticket, click on the "+ New Ticket" button at the top right corner of the page. Fill in the required information such as issue title, description, and priority, then submit the form. Your ticket will be added to the system for review.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How can I check the status of my ticket?</div>
            <div className="collapse-content text-sm">You can view the status of your ticket from the Customer Tickets section on the dashboard. Each ticket shows its current status such as Open, In Progress, or Resolved.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">What do the ticket statuses mean?</div>
            <div className="collapse-content text-sm">Open: Your ticket has been created but not yet started.

              In Progress: Our support team is currently working on your issue.

              Resolved: The issue has been fixed or completed.</div>
          </div>
           <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How long does it take to resolve a ticket?</div>
            <div className="collapse-content text-sm">Resolution time depends on the priority and complexity of the issue. High priority tickets are handled faster, while medium and low priority issues may take more time.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">Can I update or add more information to my ticket?</div>
            <div className="collapse-content text-sm">Yes. You can open your existing ticket and add additional details or updates to help the support team understand the issue better.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;