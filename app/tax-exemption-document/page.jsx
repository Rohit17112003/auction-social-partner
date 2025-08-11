import MainLayout from "@/components/templates/MainLayout";
import TaxExemption from "@/components/molecules/TaxExemption";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <TaxExemption />
    </MainLayout>
  );
};

export default page;
