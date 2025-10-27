import { Card } from "@/components/ui/card";
import { FiMoreVertical } from "react-icons/fi";

const StatsCard = () => {
  return (
    <>
      <Card className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-brand rounded"></div>
              <h4 className="font-medium text-base">Total Courses</h4>
            </div>

            <div className="flex items-end gap-2 mt-6">
              <h4 className="text-3xl font-semibold">1,134</h4>
              <p>courses</p>
            </div>

            <p className="text-green-500 mt-2">
              +5% since last month
            </p>
          </div>
          <button>
            <FiMoreVertical size={18} />
          </button>
        </div>
      </Card>
    </>
  );
};

export default StatsCard;