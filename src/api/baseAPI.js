import { API_KEY, BASE_URL } from "../config";

const get = async ({ endpoint }) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?apikey=${API_KEY}`, {
      method: "GET",
      redirect: "follow",
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export { get };
