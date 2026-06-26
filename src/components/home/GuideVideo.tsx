import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 153, 0, 0.2);
  border: 2px solid var(--primary-color);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const GuideVideo: React.FC = () => {
  return (
    <Section
      id="guide-video"
      title="Watch Our Guide Video"
      subtitle="See how USDT FLASHER PRO works in this step-by-step walkthrough."
      centered
      background="dark"
      padding="large"
    >
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/f67telDUtaA"
          title="USDT FLASHER PRO Guide Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </VideoWrapper>
    </Section>
  );
};

export default GuideVideo;
