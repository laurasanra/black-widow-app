import moment from "moment";

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

const convertToString = (items) => {
  if (items.length > 0) {
    let itemsString = items[0].name;
    for (let i = 1; i < items.length; i++) {
      itemsString += `, ${items[i].name}`;
    }
    return itemsString;
  } else {
    return undefined;
  }
};

export const formatComicDetails = (comicDetails) => {
  const formattedComicReport = {
    id: comicDetails.id,
    title: comicDetails.title,
    image: comicDetails.images[0].path + "." + comicDetails.images[0].extension,
    description: comicDetails.description,
    pages: comicDetails.pageCount,
    series: comicDetails.series.name,
    onSaleDate: moment(comicDetails.dates[0].date).format("DD/MM/YYYY"),
    creators: convertToString(comicDetails.creators.items),
    characters: convertToString(comicDetails.characters.items),
    events: convertToString(comicDetails.events.items),
  };
  return formattedComicReport;
};
