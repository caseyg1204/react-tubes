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
    console.log(video);
    if (!video.id) { return null; }
    const isFavorite = this.props.favorites[video.id.videoId];
    if (isFavorite) {
      return <h1 onClick={this.removeFavorite}> FAVORITE</h1>;
    }
    return <h1 onClick={this.addFavorite}>NOT A FAVORITE</h1>;
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
