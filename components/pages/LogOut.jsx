import Image from "next/image";
import Button from "../atoms/Button";

const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
      <div className="relative rounded-xl bg-light pb-6 pt-4 text-center shadow-lg w-[420px]">
        <button
          onClick={onCancel}
          className="absolute right-5 top-3 text-3xl font-medium text-text hover:text-dark cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="mx-auto mb-4 w-24 h-24">
          <Image src="/image/icon/emoji.png" alt="emoji" width={1000} height={1000} />
        </div>

        <h2 className="text-lg font-semibold text-[var(--color-dark)]">
          Are you sure you want to
          <span className="block text-2xl font-bold">Logout?</span>
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <div onClick={onConfirm}>
            <Button
              label="YES"
              style="bg-green hover:bg-darkgreen w-28"
            />
          </div>
          <div onClick={onCancel}>
            <Button
              label="NO"
              style="bg-red  hover:bg-darkred w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
