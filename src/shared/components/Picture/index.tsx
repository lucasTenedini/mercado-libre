import React from 'react';

import './picture.scss';

interface Props {
  src: string;
  alt: string;
  large?: boolean;
}

const Picture: React.FC<Props> = ({ src, alt, large = false }) => (
  <img className={`picture-${large ? 'large' : 'small'}`} alt={alt} src={src} />
);

export default Picture;
