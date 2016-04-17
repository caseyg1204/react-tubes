import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addFavorite, removeFavorite } from '../actions/favorite_video';

class Favorite extends Component {
  addFavorite = () => {
    this.props.actions.addFavorite(this.props.id);
  }

  removeFavorite = () => {
    this.props.actions.removeFavorite(this.props.id);
  }
  render() {
    const { id } = this.props;
    if (!id) { return null; }
    const isFavorite = this.props.favorites[id];
    if (isFavorite) {
      return <h1 onClick={this.removeFavorite}> FAVORITE</h1>;
    }
    return <h1 onClick={this.addFavorite}>NOT A FAVORITE</h1>;
  }
}

Favorite.propTypes = {
  actions: React.PropTypes.object,
  favorites: React.PropTypes.object,
  id: React.PropTypes.string,
};

const mapStateToProps = ({ favorites }) => ({ favorites });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addFavorite, removeFavorite }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
