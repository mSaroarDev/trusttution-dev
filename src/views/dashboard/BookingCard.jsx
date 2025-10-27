import Link from "next/link";
import { PiProjectorScreenDuotone } from "react-icons/pi";

const BookingCard = () => {
    return (
        <>
          <Link href={"/"} 
            className="flex items-start gap-2 bg-brand/5 p-3 rounded-md hover:bg-brand/10 hover:ml-1 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded bg-brand/20 grid place-items-center">
              <PiProjectorScreenDuotone size={20} className="text-brand flex-shrink-0" />
            </div>
            <div>
              <h3 className="font-medium">Physics Class</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs">10:00 AM - 11:00 AM, 25/08/2024 || 30 min left</span>
              </div>
            </div>
          </Link>
        </>
    );
};

export default BookingCard;