import React, { ReactElement } from 'react';

export interface VideoProps {
  video: string;
  posterImage: string;
}

const Video = ({ video, posterImage }: VideoProps): ReactElement => (
  /* const videoRef = useRef(null);*/ /* const [isPlaying, setIsPlaying] = useState(false);*/ <video
    src={video}
    className="videoPlayer"
    controls
    poster={posterImage}
  ></video>
);

Video.defaultProps = {
  video: '',
  posterImage: ''
};

export default Video;
