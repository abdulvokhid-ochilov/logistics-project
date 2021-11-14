import axios from "axios";
const URL_SRV = "http://18.216.201.29:3000/api/v1";

export const getProductByNum = async function (num) {
  try {
    let response = await axios.get(`${URL_SRV}/output?bl_num=${num}`);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const getOutputHistory = async function (name, from, to) {
  try {
    let response = await axios.get(
      `${URL_SRV}/output_history?driver_name=${name}&from=${from}&to=${to}`
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const getDefaultOutputHistory = async function () {
  try {
    let response = await axios.get(`${URL_SRV}/output_history`);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const getInputHistory = async function (name, from, to) {
  try {
    let response = await axios.get(
      `${URL_SRV}/input_history?driver_name=${name}&from=${from}&to=${to}`
    );

    return { data: response.data };
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const patchOutput = async function (data) {
  try {
    console.log(data);

    let response = await axios.patch(`${URL_SRV}/output`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const postInput = async function (data) {
  try {
    let response = await axios.post(`${URL_SRV}/input`, data);

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const getOutputQRCode = async function (transaction_id) {
  try {
    let response = await axios.get(`${URL_SRV}/output/${transaction_id}`);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const getInputQRCode = async function (transaction_id) {
  try {
    let response = await axios.get(`${URL_SRV}/input/${transaction_id}`);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
