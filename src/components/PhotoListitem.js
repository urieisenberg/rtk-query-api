import React from 'react';

export const PhotoListitem = ({ photo }) => {
  return (
    <div className="realtive m-2">
      <img className="h-2 w-20" src={photo.url} alt="random-faker-pic" />
    </div>
  );
};
