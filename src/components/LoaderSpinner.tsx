import { Loader2 } from "lucide-react";
import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Loader2 className="animate-spin text-orange-1" size={32} />
    </div>
  );
};

export default LoaderSpinner;
