// import React from "react";
// import avatar from "/public/user.png";

// function Profile({ user }) {
//   return (
//     <div className="ma w-[95%] h-[592px] bg-slate-200 mx-auto pt-12 ">
//       <div className="w-[90%] h-[400px] bg-slate-500 mx-auto flex items-center justify-center">
//         <div className="w-[40%]">
//           <img
//             src={user?.photoURL ? user?.photoURL : avatar}
//             alt=""
//             className="w-[65%]  rounded-full"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-10">
//           <h1>Name: {user?.displayName ? user?.displayName : "Anoymis"}</h1>
//           <h1>Email: {user?.email}</h1>
//           <h1>Email verified: {user?.emailVerified}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
import React from 'react'

function Profile({user}) {
  return (
   <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-50 py-12">
  <div className="w-[95%] h-[592px] bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg mx-auto p-8">
    <div className="w-full h-full bg-white rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 p-6">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative">
          <img 
            src={user?.photoURL || avatar} 
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
          />
          <div className="absolute inset-0 rounded-full border-2 border-blue-200/50 animate-pulse"></div>
        </div>
      </div>
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 hover:bg-gray-100 transition-all p-4 rounded-xl">
          <p className="text-gray-500 text-sm">Name</p>
          <p className="text-lg font-medium text-black">{user?.displayName || "Anonymous"}</p>
        </div>
        <div className="bg-gray-50 hover:bg-gray-100 transition-all p-4 rounded-xl">
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-lg font-medium text-black">{user?.email || "Not provided"}</p>
        </div>
        <div className="bg-gray-50 hover:bg-gray-100 transition-all p-4 rounded-xl">
          <p className="text-gray-500 text-sm">Verified</p>
          <p className="text-lg font-medium text-black">
            {user?.emailVerified ? "✅ Verified" : "❌ Not verified"}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Profile
