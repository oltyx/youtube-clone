import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => 
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                alt={video.snippet.title} 
                clasNmae="ui image" 
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
        </div>
            </div>
        </div>  

export default VideoItem;