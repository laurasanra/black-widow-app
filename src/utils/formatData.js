export const formatCharacterInfo = (characterDetails) => {
  let characterEvents = [];
  characterDetails.events.items.map((e) => {
    return characterEvents.push(e.name);
  });

  const formattedCharacterInfo = {
    events: characterEvents,
    image:
      characterDetails.thumbnail.path +
      "." +
      characterDetails.thumbnail.extension,
    comicsNumber: characterDetails.comics.available,
  };
  return formattedCharacterInfo;
};

export const formatComicInfo = (comic) => {
  let eventsGroup = [];
  comic.events.items.map((el) => {
    return eventsGroup.push(el.name);
  });
  const formattedComic = {
    id: comic.id,
    title: comic.title,
    events: eventsGroup,
  };
  return formattedComic;
};

export const formatComicDetails = (comicDetails) => {
  const formattedComicReport = {
    id: comicDetails.id,
    title: comicDetails.title,
    image: comicDetails.images[0].path + "." + comicDetails.images[0].extension,
    description: comicDetails.description,
    pages: comicDetails.pageCount,
    series: comicDetails.series.name,
    onSaleDate: comicDetails.dates[0].date,
    creators: comicDetails.creators.items.map((item) => {
      return item.name;
    }),
    characters: comicDetails.characters.items.map((item) => {
      return item.name;
    }),
    events: comicDetails.events.items.map((item) => {
      return item.name;
    }),
  };
  return formattedComicReport;
};
