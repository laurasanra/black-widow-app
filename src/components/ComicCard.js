import React from "react";
import { Link } from "react-router-dom";

class ComicCard extends React.Component {
  render() {
    const { comic } = this.props;
    return (
      <Link to={`/comic/${comic.id}`} key={comic.id}>
        <div className="comic-card">
          <p>{comic.title}</p>
        </div>
      </Link>
    );
  }
}

export default ComicCard;
