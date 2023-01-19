import React from 'react';

export const PhotoListitem = ({ photo }) => {
  return (
    <div>
      <img className="h-2 w-20" src={photo.url} alt="random-faker-pic" />
    </div>
  );
};
