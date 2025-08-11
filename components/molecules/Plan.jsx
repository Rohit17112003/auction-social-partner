import Image from "next/image";
import Link from "next/link";

const Plan = ({ productId }) => {
  return (
    <section className="space-y-6">
      {/* header banner */}
      <div className="bg-lightyellow text-light flex items-center justify-between gap-2 rounded-xl px-3 py-3">
        <div className="flex w-full items-center gap-3">
          <Link href="/">
            <i className="ri-arrow-left-line ri-lg"></i>
          </Link>
          <span className="text-xl font-semibold">Plan</span>
        </div>
        <div className="flex gap-4">
          <button className="flex cursor-pointer items-center justify-center gap-1 rounded bg-[#F13E3E] px-3 py-2 text-sm md:px-6 md:text-lg">
            Delete <i className="ri-delete-bin-fill"></i>
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-1 rounded bg-[#2CB24B] px-3 py-2 text-sm md:px-6 md:text-lg">
            Edit<i className="ri-pencil-fill ps-2"></i>
          </button>
        </div>
      </div>

      <div className="bg-light rounded-xl p-8">
        <h1 className="text-dark text-xl font-bold tracking-wide md:text-xl">
          Post this Month Work Pictures
        </h1>
        <div className="grid gap-6 py-4 md:grid-cols-3">
          <Image
            className="min-h-40 rounded-lg"
            src="/image/car.jpg"
            alt="car"
            width="500"
            height="500"
          />
          <Image
            className="min-h-40 rounded-lg"
            src="/image/car.jpg"
            alt="car"
            width="500"
            height="500"
          />
          <Image
            className="min-h-40 rounded-lg"
            src="/image/car.jpg"
            alt="car"
            width="500"
            height="500"
          />
        </div>

        <div className="border-yellow rounded-xl border-2 border-dashed p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 pb-3">
            <div>
              <h4 className="text-sm font-semibold">Create Date</h4>
              <p className="text-sm text-[#667380]">5/30/2023</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Last Update Timestmp </h4>
              <p className="text-sm text-[#667380]">5/30/2023</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Expected Price</h4>
              <p className="text-sm text-[#667380]">5/30/2023</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Date of Auction</h4>
              <p className="text-sm text-[#667380]">5/30/2023</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Auction Validity</h4>
              <p className="text-sm text-[#667380]">5/30/2023</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Auction No</h4>
              <p className="text-sm text-[#667380]">5/30/2023</p>
            </div>
          </div>
          <div className="border-lightgray border-t py-2 ">
            <h1 className="text-text text-xl font-bold tracking-wide">
              Report
            </h1>
            <p className="text-pink text-sm font-medium tracking-wide md:w-[95%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
