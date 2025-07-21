import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Teams = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between px-5">
        <ProfileCard
          name="sangeet joy"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="src/assets/joy.png"
        />
        <ProfileCard
          name="Debanjan tanwar"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="src/assets/debanjan.png"
        />
        <ProfileCard
          name="Koyel bhatta"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="src/assets/koyel.png"
        />
        <ProfileCard
          name="Rohan"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="src/assets/rohan.png"
        />
        <ProfileCard
          name="Saptarshi"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="src/assets/saptarshi.png"
        />
      </div>
    </div>
  );
};

export default Teams;
