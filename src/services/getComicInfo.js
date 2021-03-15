import { formatComicDetails } from "../utils/formatData";

export const getComicInfo = async (id) => {
  const url = `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=80118dfe89fca0550baf8f8ab8785904&hash=afe8eff7ea8c246fcdb1cdaeb784f811&ts=1`;
  let comicInfo;
  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const formattedComicInfo = formatComicDetails(data.data.results[0]);
        comicInfo = formattedComicInfo;
      });
    return comicInfo;
  } catch (err) {
    console.warn(err);
  }
};
