import React from 'react';

const SoundCloudPlayer = (props: {url: string}) => {
  return (
    <div>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="yes"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            props.url
          )}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
    </div>
  );
};

export default SoundCloudPlayer;