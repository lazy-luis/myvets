import { myVetsApi } from "./axios";

export const loginAdmin = async (loginData) => {
  const returnData = { status: 0 };

  try {
    const loginRes = await myVetsApi.post("/loginAdmin.php", loginData);

    if (loginRes.data.responseCode === 200) {
      returnData.status = 1;
      returnData.user = loginRes.data.user;
      returnData.message = loginRes.data.message;
    } else {
      returnData.message = loginRes.data.message;
    }
  } catch (error) {
    returnData.message = "Error Processing Request";
  }

  return returnData;
};

export const createAdmin = async (createData) => {
  const returnData = { status: 0 };

  try {
    const createRes = await myVetsApi.post("/signUpAdmin.php", createData);

    if (createRes.data.responseCode === 200) {
      returnData.status = 1;
      returnData.message = createRes.data.message;
      returnData.user = createRes.data.user;
    } else {
      returnData.message = createRes.data.message;
    }
  } catch (error) {
    returnData.message = "Error Processing Request";
  }

  return returnData;
};
