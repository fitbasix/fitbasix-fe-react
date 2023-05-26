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
