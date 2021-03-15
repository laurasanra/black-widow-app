import React, { useState, useEffect } from "react";
import FilterBox from "../components/FilterBox";
import Loading from "../components/Loading";
import { getComics } from "../services/getComics";
import ComicsContainer from "../components/ComicsContainer";
import { getSavedData, saveData } from "../services/storage";
import { sortList } from "../utils/sortData";
import { filterComics } from "../utils/filterData";

const MainPage = ({ numberOfComics, selectOptions }) => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [filteredComics, setFilteredComics] = useState([]);
  const [filter, setFilter] = useState({ query: "", select: "" });
  const [sortItem, setSortItem] = useState("A-Z");

  useEffect(() => {
    const savedComics = getSavedData("COMICS_LIST");
    const savedFilter = getSavedData("COMICS_FILTER");
    const savedSort = getSavedData("COMICS_SORT");
    if (savedFilter) setFilter(savedFilter);
    if (savedSort) setSortItem(savedSort);
    if (savedComics) {
      setComics(savedComics);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      getComics(numberOfComics).then((value) => {
        setComics(value);
        saveData("COMICS_LIST", value);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
    }
  }, [numberOfComics]);

  useEffect(() => {
    saveData("COMICS_FILTER", filter);
    saveData("COMICS_SORT", sortItem);
    const filteredValues = filterComics(comics, filter);
    setFilteredComics(sortList(filteredValues, sortItem));
  }, [comics, filter, sortItem]);

  return (
    <div>
      <FilterBox
        options={selectOptions}
        number={filteredComics ? filteredComics.length : 0}
        filter={filter}
        updateFilter={setFilter}
        sortItem={sortItem}
        updateSort={setSortItem}
      />
      {loading ? <Loading /> : <ComicsContainer elements={filteredComics} />}
    </div>
  );
};
export default MainPage;
