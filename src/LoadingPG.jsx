const LoadingPG = ({ loadingText }) => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-secondary">
      <h5 className="fw-bold text-black">{loadingText}</h5>
    </div>
  );
};

export default LoadingPG;
