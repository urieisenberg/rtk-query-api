import classNames from 'classnames';

export const Skeleton = ({ times }) => {
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5'
  );
  const innerClassNames = classNames();

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={outerClassNames}>
        <div className={innerClassNames}></div>
      </div>
    ));

  return boxes;
};
