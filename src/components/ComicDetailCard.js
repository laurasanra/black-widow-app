import React from "react";
import { Link } from "react-router-dom";

class ComicDetailCard extends React.Component {
  render() {
    const { comic } = this.props;
    return (
      <Link to={`/comic/${comic.id}`} key={comic.id}>
        <h3>{comic.title}</h3>
      </Link>
    );
  }
}

export default ComicDetailCard;
