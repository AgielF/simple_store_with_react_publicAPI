import axios from "axios";
export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get("https://fakestoreapi.com/products" + "/" + id)
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};
