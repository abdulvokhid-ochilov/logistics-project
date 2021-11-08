import axios from "axios";
const URL_SRV = "http://18.216.201.29:3000/api/v1";

export const getPosts = async (
  homePosts,
  page = 1,
  order = "asc",
  limit = 10
) => {
  try {
    const response = await axios.get(
      `${URL_SRV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
    );

    return {
      posts: homePosts.posts
        ? [...homePosts.posts, ...response.data]
        : response.data,
      page: page,
      end: response.data.length === 0 ? true : false,
    };
  } catch (error) {
    throw error;
  }
};

export const addNewsLetter = async function (data) {
  try {
    const user = await axios
      .get(`${URL_SRV}/newsletter?email=${data.email}`)
      .then((response) => response.data);

    if (!Array.isArray(user.data) || !user.data.length) {
      const response = await axios({
        method: "POST",
        url: `${URL_SRV}/newsletter`,
        data: {
          email: data.email,
        },
      });
      return {
        newsletter: "added",
        email: response.data,
      };
    } else {
      return { newsletter: "failed" };
    }
  } catch (error) {
    throw error;
  }
};

export const getProductByNum = async function (num) {
  try {
    let response = await axios.get(`${URL_SRV}/output?bl_num=${num}`);

    return { data: response.data };
  } catch (error) {
    return "404";
  }
};

export const getOutputHistory = async function (name, from, to) {
  try {
    let response = await axios.get(
      `${URL_SRV}/output_history?driver_name=${name}&from=${from}&to=${to}`
    );

    return { data: response.data };
  } catch (error) {
    return "404";
  }
};

export const getInputHistory = async function (name, from, to) {
  try {
    let response = await axios.get(
      `${URL_SRV}/input_history?driver_name=${name}&from=${from}&to=${to}`
    );

    return { data: response.data };
  } catch (error) {
    return "404";
  }
};

// export const patchOutput = async function (data) {
//   try {
//     const response = await axios({
//       method: "PATCH",
//       url: `${URL_SRV}/output`,
//       data,
//     });
//     console.log(response);
//   } catch (error) {
//     throw error;
//   }
// };
// // export const patchOutput = function (data) {
//   fetch(`${URL_SRV}/output`, {
//     method: "PATCH",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       console.log(response.status);
//       return response.json();
//     })
//     .then((data) => console.log(data));
// };

// export const postInput = async (data) => {
//   try {
//     const response = await axios.post(`${URL_SRV}/input`, data);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const patchOutput = async function (data) {
  try {
    // try {
    let response = await axios.patch(`${URL_SRV}/output`, {
      driver_name: "kim",
      phone_num: "01087128235",
      car_num: "02허 9757",
      bl_num: ["HSLI024277300006J", "ABCD024277300006J", "BCDA024277300006J"],
      company_name: ["YUJIN INTERNATIONAL", "Samsung", "Samsung chemical"],
      quantity: [1, 1, 1],
      unit: ["box", "box", "kg"],
    });

    return console.log(response);
  } catch (error) {
    return "404";
  }
};

export const postInput = async function (data) {
  try {
    // try {
    let response = await axios.post(`${URL_SRV}/input`, data);

    return response;
  } catch (error) {
    return "404";
  }
};
// export const test = () => {
//   return fetch(`${URL_SRV}/output`, {
//     method: "PATCH",
//     mode: "CORS",
//     body: {
//       driver_name: "kim",
//       phone_num: "01087128235",
//       car_num: "02허 9757",
//       bl_num: ["HSLI024277300006J", "ABCD024277300006J", "BCDA024277300006J"],
//       company_name: ["YUJIN INTERNATIONAL", "Samsung", "Samsung chemical"],
//       quantity: [1, 1, 1],
//       unit: ["box", "box", "kg"],
//     },
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => err);
// };

// test();
