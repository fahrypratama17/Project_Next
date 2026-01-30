const loading = () => {
  return (
    <div className="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-white">
      <div className="space-y-2">
        <div className="border-primary-400 border-t-primary-800 mx-auto flex size-10 animate-spin items-center rounded-full border-4" />
        <p className="text-4xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
