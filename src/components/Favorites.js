import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoListItem from './VideoListItem';

class Favorites extends Component {
  renderItems() {
    const favorites = Object.keys(this.props.favorites);
    return (
      <div>
      {favorites.map((favorite, index) => {
        const item = this.props.favorites[favorite];
        return <VideoListItem searchResult={item} key={index} />;
      })}
      </div>
    );
  }
  render() {
    if (!this.props.favorites) { return null; }
    return this.renderItems();
  }
}

Favorites.propTypes = {
  favorites: React.PropTypes.object,
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(mapStateToProps, () => ({}))(Favorites);
