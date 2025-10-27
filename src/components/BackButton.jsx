"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({children}) => {
  const {back} = useRouter();

    return (
        <>
          <button 
            onClick={() =>  back()} 
            className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-slate-200 transition-colors cursor-pointer mb-3 px-2 py-1 rounded"
          >
            <IoIosArrowBack size={18} className="shrink-0" />
            {children || 'Back'}
          </button>
        </>
    );
};

export default BackButton;