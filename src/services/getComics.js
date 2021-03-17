import { formatComicInfo } from "../utils/formatData";

async function comicUrls(numberOfComics) {
  let urls = [];
  for (let i = 0; i < numberOfComics; i += 90) {
    const url = `https://gateway.marvel.com/v1/public/characters/1009189/comics?apikey=80118dfe89fca0550baf8f8ab8785904&hash=afe8eff7ea8c246fcdb1cdaeb784f811&ts=1&limit=90&offset=${i}`;
    urls.push(url);
  }
  return urls;
}

export const getComics = async (numberOfComics) => {
  const urlsToFetch = await comicUrls(numberOfComics);
  if (urlsToFetch.length > 0) {
    try {
      let comics = [];
      await Promise.all(urlsToFetch.map((url) => fetch(url)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          for (let d of data) {
            d.data.results.forEach((comic) => {
              const formattedComic = formatComicInfo(comic);
              const duplicatedComic = comics.find((comic) => {
                return comic.id === formattedComic.id;
              });
              if (!duplicatedComic) return comics.push(formattedComic);
            });
          }
        });
      return comics;
    } catch (err) {
      console.warn(err);
    }
  }
};
