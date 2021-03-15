export const saveData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getSavedData = (name) => {
  const comicsData = localStorage.getItem(name);
  if (comicsData !== null) {
    return JSON.parse(comicsData);
  }
};
