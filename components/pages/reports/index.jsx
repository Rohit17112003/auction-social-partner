import Image from "next/image";
import Link from "next/link";

const Reports = ({ productId }) => {
  return (
    <section className="space-y-6">
      {/* header banner */}
      <div className="bg-lightyellow text-light flex items-center justify-between gap-2 rounded-xl px-3 py-3 font-poppins tracking-wide">
        <div className="flex w-full items-center gap-3">
          <Link href="/">
            <i className="ri-arrow-left-line ri-lg"></i>
          </Link>
          <span className="text-xl font-medium">
           Reports
          </span>
        </div>
        <div className="flex gap-4">
          <button className="flex cursor-pointer items-center justify-center gap-1 rounded bg-[#F13E3E] px-3 py-2 text-sm md:px-6 md:text-lg font-poppins font-medium">
            Delete <i className="ri-delete-bin-fill"></i>
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-1 rounded bg-[#2CB24B] px-3 py-2 text-sm md:px-6 md:text-lg font-poppins font-medium">
            Edit<i className="ri-pencil-fill ps-2"></i>
          </button>
        </div>
      </div>

      <div className="bg-light rounded-xl p-8">
        <h1 className="text-[#263039] text-lg font-poppins font-semibold tracking-wide md:text-[1.1rem]">
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
              <h4 className="text-sm md:text-[0.85rem] font-semibold font-poppins text-[#263039]">Month</h4>
              <p className="text-sm md:text-[0.8rem] mt-1 text-[#667380]">Jan 2025</p>
            </div>
            <div>
              <h4 className="text-sm md:text-[0.85rem] font-semibold font-poppins text-[#263039]">Amount Received</h4>
              <p className="text-sm md:text-[0.8rem] mt-1 text-[#667380]">2345678 INR</p>
            </div>
            <div>
              <h4 className="text-sm md:text-[0.85rem] font-semibold font-poppins text-[#263039]">No. of People Benefited</h4>
              <p className="text-sm md:text-[0.8rem] mt-1 text-[#667380]">234</p>
            </div>
            <div>
              <h4 className="text-sm md:text-[0.85rem] font-semibold font-poppins text-[#263039] md:pr-10">No. of Institutions where the solutions is deployed</h4>
              <p className="text-sm md:text-[0.8rem] mt-1 text-[#667380]">234</p>
            </div>
            <div>
              <h4 className="text-sm md:text-[0.85rem] font-semibold font-poppins text-[#263039]">It Forms To Be Issued</h4>
              <p className="text-sm md:text-[0.8rem] mt-1 text-[#667380]">Jan 2025</p>
            </div>
            <div>
              <h4 className="text-sm md:text-[0.85rem] font-semibold font-poppins text-[#263039]">It Forms Provided</h4>
              <p className="text-sm md:text-[0.8rem] mt-1 text-[#667380]">2345678 INR</p>
            </div>
          </div>
          <div className="border-[#E7B01040] border-t py-2 ">
            <h1 className="text-[#263039] text-[1rem] font-semibold font-poppins tracking-wide">
              Report
            </h1>
            <p className="text-[#667380] text-sm md:text-[0.8rem]  tracking-wide md:w-[95%] font-poppins mt-2">
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

export default Reports;
