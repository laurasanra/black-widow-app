import React from "react";
import ComicCard from "./ComicCard";
import NoResults from "./NoResults";

class ComicsContainer extends React.Component {
  render() {
    const { elements } = this.props;
    if (elements.length < 1) return <NoResults />;
    else
      return (
        <div className="list_container">
          {elements.map((comic) => {
            return <ComicCard comic={comic} key={comic.id} />;
          })}
        </div>
      );
  }
}

export default ComicsContainer;
