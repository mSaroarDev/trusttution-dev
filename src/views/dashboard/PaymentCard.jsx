import { SiFampay } from "react-icons/si";

const PaymentCard = () => {
  return (
    <>
      <div
        className="flex items-start justify-between gap-2 bg-brand/5 p-3 rounded-md hover:bg-brand/10 hover:ml-1 transition-all duration-300"
      >
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded bg-green-500/20 grid place-items-center">
            <SiFampay size={20} className="text-green-500 flex-shrink-0" />
          </div>
          <div>
            <h3>Payment Recieved</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-light">TrxID: 2210251000</span>
            </div>
          </div>
        </div>

      <div>
        <h3 className="font-medium text-green-500 text-right">$150.00</h3>
        <p className="text-xs text-right font-light">22/10/25 - 10:00 AM</p>
      </div>
      </div>
    </>
  );
};

export default PaymentCard;