import axios from "axios";

export async function getCart(token) {
  const res = await axios.get(
    "https://game-store-react-backend.onrender.com/carts",
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
}

export async function addToCart({ id, token }) {
  const res = await axios.post(
    "https://game-store-react-backend.onrender.com/carts",
    { productId: id },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
}

export async function deleteCartItem({ id, token }) {
  const res = await axios.delete(
    `https://game-store-react-backend.onrender.com/carts/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
}

export async function deleteCart(token) {
  const res = await axios.delete(
    "https://game-store-react-backend.onrender.com/carts",
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  return res.data;
}
