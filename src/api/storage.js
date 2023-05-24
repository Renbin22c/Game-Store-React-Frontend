import axios from "axios";

export const checkOutAll = async ({ data, token }) => {
  const res = await axios.post(
    "https://game-store-react-backend.onrender.com/storages",
    data,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );

  // if (res.status === 200) window.location.href = res.data;
  return res.data;
};

export const getStorage = async (token) => {
  const res = await axios.get(
    "https://game-store-react-backend.onrender.com/storages",
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
};
