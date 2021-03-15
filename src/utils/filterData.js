export const filterComics = (comics, filter) => {
  return comics.filter((el) => {
    if (filter.select === "" && filter.query === "") return comics;
    else if (filter.select !== "")
      return (
        el.events.includes(filter.select) &&
        el.title.toLowerCase().includes(filter.query.toLowerCase())
      );
    else return el.title.toLowerCase().includes(filter.query.toLowerCase());
  });
};
