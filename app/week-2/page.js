// Import necessary dependencies
import React from 'react';
import Link from 'next/link';

// Define the Page component
const Page = () => {
  return (
    <div>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      {/* Link to the week-2 page */}
      <Link href="/week-2/student-info">
        <a>Week 2 Assignment</a>
      </Link>
    </div>
  );
};

// Export the Page component as the default export
export default Page;
