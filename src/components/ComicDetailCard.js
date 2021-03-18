import React from "react";

class ComicDetailCard extends React.Component {
  render() {
    const { comic } = this.props;
    return (
      <div className="comic-detail-card">
        <h2 className="card-title">{comic.title}</h2>
        <div className="card-body">
          {comic.description && (
            <div>
              <span className="text-bolder">Description: </span>
              <span>{comic.description}</span>
            </div>
          )}
          {comic.series && (
            <div>
              <span className="text-bolder">Series: </span>
              <span>{comic.series}</span>
            </div>
          )}
          {comic.pages && (
            <div>
              <span className="text-bolder">Nº of pages: </span>
              <span>{comic.pages}</span>
            </div>
          )}
          {comic.onSaleDate && (
            <div>
              <span className="text-bolder">Sale date: </span>
              <span>{comic.onSaleDate}</span>
            </div>
          )}
          {comic.events && (
            <div>
              <span className="text-bolder">Events: </span>
              <span>{comic.events}</span>
            </div>
          )}
          {comic.creators && (
            <div>
              <span className="text-bolder">Creators: </span>
              <span>{comic.creators}</span>
            </div>
          )}
          {comic.characters && (
            <div>
              <span className="text-bolder">Characters: </span>
              <span>{comic.characters}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ComicDetailCard;
