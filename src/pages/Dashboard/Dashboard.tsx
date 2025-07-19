import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TopBar from "../../components/TopBar/TopBar";
import { FaRegHandPaper } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <ProfileCard
        name="sangeet joy"
        role="tester"
        email="s.joy@gmail.com"
        imageUrl="src/assets/joy.png"
      />
      <ProfileCard
        name="sangeet joy"
        role="tester"
        email="s.joy@gmail.com"
        imageUrl="src/assets/debanjan.png"
      />
      <ProfileCard
        name="sangeet joy"
        role="tester"
        email="s.joy@gmail.com"
        imageUrl="src/assets/koyel.png"
      />
      <ProfileCard
        name="sangeet joy"
        role="tester"
        email="s.joy@gmail.com"
        imageUrl="src/assets/rohan.png"
      />
    </>
  );
};

export default Dashboard;
