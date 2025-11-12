import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "8px",
          padding: "10px 16px",
        },
        success: {
          iconTheme: {
            primary: "#4ade80", // green
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#f87171", // red
            secondary: "#fff",
          },
        },
      }}
    />
  );
};

export default Toast;
