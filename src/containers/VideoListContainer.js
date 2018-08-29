import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = state => {
  return {
    videos: state.videoList
  }
}

const mapDispatchToProps = dispatch => {
	return {
		handleVideoListEntryTitleClick: (e) => dispatch(changeVideo, e)
	}
}

var VideoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
