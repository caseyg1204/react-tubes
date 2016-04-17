import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoriteListItem from './FavoriteListItem';

class Favorites extends Component {
  renderItems() {
    const favorites = Object.keys(this.props.favorites);
    return (
      <div>
        <h2>Favorites</h2>
        {favorites.map((favorite, index) => {
          const item = this.props.favorites[favorite];
          return <FavoriteListItem video={item} key={index} />;
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
