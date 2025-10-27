import { Card } from "@/components/ui/card";
import { LuTicket } from "react-icons/lu";

const StatsCard = () => {
    return (
        <>
          <Card className={"py-5 px-7"}>
            <div className="flex items-start justify-start gap-5">
              <div className="flex-shrink-0 bg-brand/10 text-brand w-14 h-14 rounded grid place-content-center">
                <LuTicket size={22} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">120</h2>
                <p className="font-light">Total Appointments</p>
              </div>
            </div>
          </Card>
        </>
    );
};

export default StatsCard;