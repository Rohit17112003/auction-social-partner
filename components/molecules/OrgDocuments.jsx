import Link from "next/link";
import SimpleImageUploader from "./ImageUploader";

const OrgDocuments = () => {
  return (
    <section className="space-y-6">
      {/* header banner */}
      <div className="bg-lightyellow text-light flex items-center justify-between gap-2 rounded-xl px-3 py-3">
        <div className="flex w-full items-center gap-3">
          <Link href="/">
            <i className="ri-arrow-left-line ri-lg"></i>
          </Link>
          <span className="text-xl font-semibold">Organization Documents</span>
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

      <div className="bg-light rounded-lg p-8 grid md:grid-cols-3 md:px-20 gap-8 md:gap-10">
        <SimpleImageUploader label="Annual Report" />
        <SimpleImageUploader label="Monthly Plan" />
        <SimpleImageUploader label="Budget Document" />
        <SimpleImageUploader label="Employee List" />
        <SimpleImageUploader label="Policy Guidelines" />
        <SimpleImageUploader label="Tax Records" />
      </div>
    </section>
  );
};

export default OrgDocuments;
