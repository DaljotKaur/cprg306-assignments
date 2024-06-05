// Import necessary dependencies
import React from 'react';
import Link from 'next/link';

// Define the StudentInfo component
const StudentInfo = () => {
  return (
    <div>
      <p> Daljot Kaur </p>
      {/* Replace 'your-github-username' with your actual GitHub username */}
      <Link href="https://github.com/daljotkaur">
        <a>Link to GitHub Repository</a>
      </Link>
    </div>
  );
};

// Export the StudentInfo component as the default export
export default StudentInfo;
