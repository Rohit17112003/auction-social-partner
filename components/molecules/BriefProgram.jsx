import Image from "next/image";
import Link from "next/link";

const BriefProgram = ({ productId }) => {
  return (
    <section className="space-y-6">
      {/* header banner */}
      <div className="bg-lightyellow text-light flex items-center justify-between gap-2 rounded-xl px-3 py-3">
        <div className="flex w-full items-center gap-3">
          <Link href="/">
            <i className="ri-arrow-left-line ri-lg"></i>
          </Link>
          <span className="text-xl font-semibold">
            Brief on Current Program
          </span>
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
        <h1 className="text-dark pb-4 text-xl font-bold tracking-wide md:text-xl">
          Our Organization and Works
        </h1>

        <div className="border-yellow rounded-lg border p-6 py-20"></div>

        <h1 className="text-dark pt-8 text-xl font-bold tracking-wide">
          Pictures of Our Work
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
      </div>
    </section>
  );
};

export default BriefProgram;
