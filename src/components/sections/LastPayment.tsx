import Wallet from "../../assets/wallet.svg";

export const LastPayment = () => {
  return (
    <div className="w-[205px] h-[100px] bg-[#1C243F] rounded-md flex items-center justify-center gap-5">
      <div>
        <img src={Wallet} alt="wallet" />
      </div>
      <div>
        <p>$1250</p>
        <p className="text-[#6C747D] font-medium">Last payment</p>
      </div>
    </div>
  );
};
