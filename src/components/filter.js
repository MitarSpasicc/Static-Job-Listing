import React from "react";

function Filter(props) {
  const styles =
    props.filter.length > 0
      ? { visibility: "visible" }
      : { visibility: "hidden" };
  return (
    <div className="filter-container" style={styles}>
      <div className="filter-btns">
        {props.filter.map((f, index) => {
          return (
            <div className="btn-container" key={f}>
              <span className="filter-span">{f}</span>
              <span
                className="buttonized"
                onClick={() => props.removeFilter(index)}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
      <div className="filter-clear">
        <span className="clear" onClick={props.clearFilters}>
          Clear
        </span>
      </div>
    </div>
  );
}
export default Filter;
