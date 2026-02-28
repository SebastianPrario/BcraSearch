import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
`;

const BlobContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const Blob = styled.div<{ color: string; size: string; top?: string; left?: string; right?: string; bottom?: string; delay: string; duration: string }>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  background: ${props => props.color};
  filter: blur(80px);
  border-radius: 50%;
  opacity: 0.15;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  animation: ${float} ${props => props.duration} ease-in-out infinite;
  animation-delay: ${props => props.delay};
`;

export const BackgroundBlobs = () => {
    return (
        <BlobContainer>
            <Blob
                color="var(--primary)"
                size="400px"
                top="-100px"
                left="-100px"
                delay="0s"
                duration="15s"
            />
            <Blob
                color="var(--secondary)"
                size="300px"
                bottom="-50px"
                right="-50px"
                delay="-5s"
                duration="20s"
            />
            <Blob
                color="var(--primary)"
                size="250px"
                top="40%"
                right="10%"
                delay="-2s"
                duration="18s"
            />
        </BlobContainer>
    );
};
