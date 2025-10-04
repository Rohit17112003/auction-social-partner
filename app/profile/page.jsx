import MainLayout from "@/components/templates/MainLayout";
import Profile from "@/components/pages/Profile";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <Profile />
    </MainLayout>
  );
};

export default page;
