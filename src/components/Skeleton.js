import classNames from 'classnames';

export const Skeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}

      />
    ));

  return boxes;
};
