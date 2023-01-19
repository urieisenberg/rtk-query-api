import classNames from 'classnames';

export const Skeleton = ({ times }) => {
  const boxes = [];

  for (let i = 0; i < times; i++) {
    boxes.push(<div key={i} />);
  }

  return boxes;
};
