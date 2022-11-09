const ShoppingBag = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.411743 5.46655H13.5884V17.0081H0.411743V5.46655Z"
        fill="white"
      />
      <path
        d="M4.67188 0.657471H9.34121L10.2765 1.62625V5.4666L9.26455 5.46388V1.6242H4.75454V5.46388L3.72388 5.4666V1.6242L4.67188 0.657471Z"
        fill="white"
      />
    </svg>
  );
};
const CheckMark = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L3.5 6L1 3.72727"
        stroke="#1EA4CE"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Icon = ({ name, width, height }) => {
  const icons = {
    bag: ShoppingBag,
    check: CheckMark,
  };

  const Component = icons[name];
  return <Component width={width} height={height} />;
};
