import React from "react";

class ComicDetailCard extends React.Component {
  render() {
    const { comic } = this.props;
    console.log(comic);
    return (
      <div>
        <p className="">{comic.title}</p>
      </div>
    );
  }
}

export default ComicDetailCard;
