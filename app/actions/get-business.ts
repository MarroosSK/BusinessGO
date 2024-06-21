"use server";

import axios from "axios";

const API_KEY = process.env.YELP_API_KEY;
const options = {
  method: "GET",
  headers: { Authorization: `Bearer ${API_KEY}`, accept: "application/json" },
};

export const getBusiness = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/${id}`,
      options
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
