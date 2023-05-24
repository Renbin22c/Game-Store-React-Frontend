import axios from "axios";

export const userRegister = async (registerData) => {
  const res = await axios.post(
    "https://game-store-react-backend.onrender.com/users/register",
    registerData
  );
  return res.data;
};

export const userLogin = async (loginData) => {
  const res = await axios.post(
    "https://game-store-react-backend.onrender.com/users/login",
    loginData
  );
  return res.data;
};

export const getUserById = async ({ id, token }) => {
  const res = await axios.get(
    `https://game-store-react-backend.onrender.com/users/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
};

export const userUpdate = async (user) => {
  let formData = new FormData();
  formData.append("username", user.updateUser.username);
  formData.append("gender", user.updateUser.gender);
  formData.append("introduce", user.updateUser.introduce);
  formData.append("country", user.updateUser.country);
  formData.append("birthday", user.updateUser.birthday);
  formData.append("image", user.image);
  console.log(user.image);

  const res = await axios.put(
    `https://game-store-react-backend.onrender.com/users/${user.updateUser._id}`,
    formData,
    {
      headers: {
        "x-auth-token": user.token,
      },
    }
  );

  return res.data;
};

export const getUsers = async () => {
  const res = await axios.get(
    "https://game-store-react-backend.onrender.com/users"
  );
  return res.data;
};

export const deleteUser = async ({ id, token }) => {
  const res = await axios.delete(
    `https://game-store-react-backend.onrender.com/users/${id}`,
    {
      headers: { "x-auth-token": token },
    }
  );
  return res.data;
};
