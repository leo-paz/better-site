const LandingPage = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full bg-gray-100">
        {/* First column */}
      </div>
      <div className="w-full lg:w-1/2">
        {/* Second column */}
        <div className="flex flex-col h-full">
          <div className="w-full h-1/2 bg-gray-200">
            {/* First row */}
          </div>
          <div className="w-full h-1/2 bg-gray-300">
            {/* Second row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;