import { updateEmail } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebase/config";

function Profile({ user }) {
  const [email, setEmail] = useState("");
  const changeEmail = () => {
    updateEmail(auth.currentUser, email)
      .then(() => {
        toast.success("Muvaffaqiyatli o'zgartirildi🎉");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Xatolik 😒");
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-50 py-12">
      <div className="w-[95%] h-[592px] bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg mx-auto p-8">
        <div className="w-full h-full bg-white rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 p-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src={user?.photoURL || "/user.png"}
                alt="Profile"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
              />

              <div className="absolute inset-0 rounded-full border-2 border-blue-200/50 animate-pulse"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 hover:bg-gray-100 transition-all p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-lg font-medium text-black">
                {user?.displayName || "Anonymous"}
              </p>
            </div>
            <div className="bg-gray-50 hover:bg-gray-100 transition-all p-4 rounded-xl">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg font-medium text-black">
                {user?.email || "Not provided"}
              </p>
            </div>
            <button></button>
            <button
              className="w-[200px] h-[40px] border border-cyan-500 rounded-lg text-xl font-mono mx-auto text-black"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Change email
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <div className=" flex items-center justify-center gap-4">
                  <input
                    type="text"
                    className="w-96 h-12 outline-none pl-2 rounded-lg"
                    placeholder="Change email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={changeEmail}
                    className="w-[100px] h-[48px] bg-green-800 rounded-xl "
                  >
                    Change
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
