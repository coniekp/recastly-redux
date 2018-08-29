import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
	var option={
		key: YOUTUBE_API_KEY,
		query: q,
		max: 5
	};

 	return () => searchYouTube(option, (results)=> {
 		changeVideoList(results);
 		changeVideo(results[0])
 	})
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
