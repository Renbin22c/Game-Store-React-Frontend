import axios from "axios";

export const getComments = async (id) => {
  const res = await axios.get(
    `https://game-store-react-backend.onrender.com/comments/${id}`
  );
  return res.data;
};

export const commentProduct = async ({ comment, token, id }) => {
  const res = await axios.post(
    `https://game-store-react-backend.onrender.com/comments/${id}`,
    comment,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
};

export const updateComment = async ({ comment, token, id }) => {
  const res = await axios.put(
    `https://game-store-react-backend.onrender.com/comments/${id}`,
    comment,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
};

export const deleteComment = async ({ token, id }) => {
  const res = await axios.delete(
    `https://game-store-react-backend.onrender.com/comments/${id}`,
    {
      headers: { "x-auth-token": token },
    }
  );
  return res.data;
};
