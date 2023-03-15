import axios from "axios";

const API_URL = "/api/chores/";

//Create new chore
const createChore = async (choreData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, choreData, config);

  return response.data;
};

//Get User Chores
const getChores = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Delete user coal
const deleteChore = async (choreId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + choreId, config);

  return response.data;
};

const choreService = {
  createChore,
  getChores,
  deleteChore,
};

export default choreService;
