import MainLayout from "@/components/templates/MainLayout";
import OrgDocuments from "@/components/molecules/OrgDocuments";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <OrgDocuments />
    </MainLayout>
  );
};

export default page;
