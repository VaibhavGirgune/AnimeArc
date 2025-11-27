import axios from "axios";

// Get popular anime for carousel
export const getTopAnime = async () => {
  try {
    const res = await axios.get("https://api.jikan.moe/v4/anime?order_by=popularity&sort=asc");
    return res.data.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Get top rated anime for cards
export const getTopRatedAnime = async () => {
  try {
    const res = await axios.get("https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=18");
    return res.data.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
