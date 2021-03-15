export const sortList = (elements, sortItem) => {
  if (elements && sortItem === "A-Z") {
    return elements.sort(function(a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
  } else if (elements && sortItem === "Z-A") {
    return elements.sort(function(a, b) {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  } else return elements;
};
