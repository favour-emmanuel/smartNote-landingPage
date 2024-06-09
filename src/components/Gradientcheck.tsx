const Gradientcheck = () => {
  return (
    <span className="icon-container">
      <svg
        width="22"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-gradient"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#017373" />
            <stop offset="100%" stopColor="#AAD9D1" />
          </linearGradient>
        </defs>
        <path
          d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
          className="icon-gradient"
        />
      </svg>
    </span>
  );
};

export default Gradientcheck;
