import { myVetsApi } from "./axios";

export const createUser = async (userData) => {
  const returnData = { status: 0 };

  try {
    const createRes = await myVetsApi.post("/user/createUser.php", userData);

    if (createRes.data.responseCode === 200) {
      returnData.status = 1;
      returnData.message = createRes.data.message;
    } else {
      returnData.message = createRes.data.message;
    }
  } catch (error) {
    returnData.message = "Error Processing Request";
  }

  return returnData;
};

export const viewUser = async (searchData) => {
  const returnData = { status: 0 };

  try {
    const createRes = await myVetsApi.post("/user/getUser.php", searchData);

    if (createRes.data.responseCode === 200) {
      returnData.status = 1;
      returnData.message = createRes.data.message;
    } else {
      returnData.message = createRes.data.message;
    }
  } catch (error) {
    returnData.message = "Error Processing Request";
  }

  return returnData;
};
