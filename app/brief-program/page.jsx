import MainLayout from "@/components/templates/MainLayout";
import BriefProgram from "@/components/molecules/BriefProgram";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <BriefProgram />
    </MainLayout>
  );
};

export default page;
