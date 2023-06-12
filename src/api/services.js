import axiosInstance from "../axios";

export const postBMI = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/api/nutritions/getbmi`,
      payload
    );

    return response?.data;
  } catch (e) {
    return { error: e.response.data };
  }
};

export const postDialog = async (payload, searchParams) => {
  try {
    const response = await axiosInstance.post(`/api/getCall/CallInfo${searchParams}`, payload);

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