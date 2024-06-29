import React from "react";


function HomeCard({ icon: Icon, title }) {
  return (
    <div className="p-6 relative flex gap-3 flex-col items-center justify-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-64">
      <Icon fontSize="large" />
      <h5 className="block text-xl antialiased font-semibold ">
        {title}
      </h5>
    </div>
  );
}

export default HomeCard;

