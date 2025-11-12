import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const UserForm = () => {
  const {
        showUserForm,
        setShowUserForm,
        userFormState,
         userFormId,
        userFormName,
        setUserFormName,
        userFormEmail,
        setUserFormEmail,
        userFormRole,
        setUserFormRole,
        fetchActiveUsers,
        axios
  } = useAppContext();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  // handle submit
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (userFormState === "create") {
        // create user API
        const { data } = await axios.post("/api/user/create-user", {
          name,
          email,
          role,
        });
        toast.success(data.message);
        await fetchActiveUsers();
      } else {
        // update user API
        const { data } = await axios.put(`/api/user/update-user/${userFormId}`, {
          name: userFormName,
          email: userFormEmail,
          role: userFormRole,
        });
        toast.success(data.message);
        await fetchActiveUsers();
      }

      setShowUserForm(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  if (!showUserForm) return null;

  const isCreate = userFormState === "create";

  return (
    <div
      onClick={() => setShowUserForm(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          {isCreate ? "Create User" : "Update User"}
        </p>

        {/* Name */}
        <div className="w-full">
          <p>Name</p>
          <input
            onChange={(e) =>
              isCreate ? setName(e.target.value) : setUserFormName(e.target.value)
            }
            value={isCreate ? name : userFormName}
            placeholder="Enter name"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="text"
            required
            minLength={3}
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) =>
              isCreate ? setEmail(e.target.value) : setUserFormEmail(e.target.value)
            }
            value={isCreate ? email : userFormEmail}
            placeholder="Enter email"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="email"
            required
          />
        </div>

        {/* Role */}
        <div className="w-full">
          <p>Role</p>
          <select
            onChange={(e) =>
              isCreate ? setRole(e.target.value) : setUserFormRole(e.target.value)
            }
            value={isCreate ? role : userFormRole}
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          className={`${
            isCreate ? "bg-green-700 hover:bg-green-800" : "bg-blue-700 hover:bg-blue-800"
          } text-white w-full py-2 rounded-lg cursor-pointer font-medium`}
        >
          {isCreate ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
