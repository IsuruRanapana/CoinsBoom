import { API_KEY, BASE_URL } from "../config";

const get = async ({ endpoint }) => {
  var myHeaders = new Headers();
  myHeaders.append("X-CoinAPI-Key", { API_KEY });
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
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
