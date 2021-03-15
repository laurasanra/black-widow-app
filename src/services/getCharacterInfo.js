import { formatCharacterInfo } from "../utils/formatData";

const CHARACTER_URL =
  "https://gateway.marvel.com:443/v1/public/characters/1009189?apikey=80118dfe89fca0550baf8f8ab8785904&hash=afe8eff7ea8c246fcdb1cdaeb784f811&ts=1";

export const getCharacterInfo = async () => {
  let characterInfo;
  try {
    await fetch(CHARACTER_URL)
      .then((res) => res.json())
      .then((data) => {
        const formattedCharacterInfo = formatCharacterInfo(
          data.data.results[0]
        );
        characterInfo = formattedCharacterInfo;
      });
    return characterInfo;
  } catch (err) {
    console.warn(err);
  }
};
