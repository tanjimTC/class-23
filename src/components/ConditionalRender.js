import { useState } from "react";
const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLOginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold mb-2">
        This is conditional render
      </h1>
      {isLoggedIn ? (
        <h1 className="text-2xl text-center font-semibold mb-2">
          Hello Admin, Welcome to the admin dashboard
        </h1>
      ) : (
        <h1 className="text-2xl text-center font-semibold mb-2">
          Hello User, Welcome to the user dashboard
        </h1>
      )}

      <button
        onClick={() => handleLOginLogout()}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex mx-auto"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default ConditionalRender;
