import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

import { addFavorite, removeFavorite } from '../actions/favorite_video';

class Favorite extends Component {
  componentWillReceiveProps(newProps) {
    cookie.save('favorites', JSON.stringify(newProps.favorites), { path: '/' });
  }
  addFavorite = () => {
    this.props.actions.addFavorite(this.props.video);
  }

  removeFavorite = () => {
    this.props.actions.removeFavorite(this.props.video);
  }
  render() {
    const { video } = this.props;
    if (!video.id) { return null; }
    const isFavorite = this.props.favorites[video.id.videoId];
    if (isFavorite) {
      return <button onClick={this.removeFavorite}>Unfavorite</button>;
    }
    return <button onClick={this.addFavorite}>FAVORITE</button>;
  }
}

Favorite.propTypes = {
  actions: React.PropTypes.object,
  favorites: React.PropTypes.object,
  video: React.PropTypes.object,
};

const mapStateToProps = ({ favorites }) => ({ favorites });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addFavorite, removeFavorite }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
