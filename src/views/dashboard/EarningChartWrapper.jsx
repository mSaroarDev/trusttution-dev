import { Card } from "@/components/ui/card";
import { FiMoreVertical } from "react-icons/fi";

const EarningChartWrapper = () => {
  return (
    <>
      <Card className="p-4 mt-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-brand rounded"></div>
              <h4 className="font-medium text-base">Earning Overview</h4>
            </div>
          </div>
          <button>
            <FiMoreVertical size={18} />
          </button>
        </div>

        <div className="min-h-32">

        </div>
      </Card>
    </>
  );
};

export default EarningChartWrapper;