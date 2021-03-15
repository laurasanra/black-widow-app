import React from "react";

class FilterBox extends React.Component {
  render() {
    const {
      options,
      number,
      filter,
      updateFilter,
      sortItem,
      updateSort,
    } = this.props;
    return (
      <div className="filter_box">
        <div className="filters_container">
          <input
            type="text"
            placeholder="Search..."
            value={filter.query}
            onChange={(e) => {
              updateFilter({ ...filter, query: e.target.value });
            }}
          />
          <select
            name="select"
            value={filter.select}
            onChange={(e) => {
              updateFilter({ ...filter, select: e.target.value });
            }}
          >
            <option value="" key="empty">
              Select an event
            </option>
            {options.map((option) => {
              return (
                <option value={option} key={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="options_container">
          <div
            className="clear_button"
            onClick={(e) => {
              updateFilter({ query: "", select: "" });
            }}
          >
            CLEAR
          </div>
          <div
            className="sort_button"
            onClick={(e) => {
              updateSort(sortItem === "A-Z" ? "Z-A" : "A-Z");
            }}
          >
            SORT BY {sortItem === "A-Z" ? "Z-A" : "A-Z"}
          </div>
          <p className="results_text">{number} results</p>
        </div>
      </div>
    );
  }
}
export default FilterBox;
