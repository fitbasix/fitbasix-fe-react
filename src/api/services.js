import axiosInstance from "../axios";

export const postBMI = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/api/nutritions/getbmr`,
      payload
    );

    return response?.data;
  } catch (e) {
    return { error: e.response.data };
  }
};

export const postDialog = async (payload) => {
  try {
    const response = await axiosInstance.post(`/api/getCall/CallInfo`, payload);

    return response?.data;
  } catch (e) {
    return { error: e.response.data };
  }
};

export const getTrainers = async () => {
  try {
    const response = await axiosInstance.get(`/api/auth/getTrainers`);

    return response?.data;
  } catch (e) {
    return { error: e.response.data };
  }
};