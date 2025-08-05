import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Teams = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between gap-3 p-5 mt-5">
        <ProfileCard
          name="sangeet joy"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="/assets/joy.png"
        />
        <ProfileCard
          name="Debanjan tanwar"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="/assets/debanjan.png"
        />
        <ProfileCard
          name="Koyel bhatta"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="/assets/koyel.png"
        />
        <ProfileCard
          name="Rohan"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="/assets/rohan.png"
        />
        <ProfileCard
          name="Saptarshi"
          role="tester"
          email="s.joy@gmail.com"
          imageUrl="/assets/saptarshi.png"
        />
      </div>
    </div>
  );
};

export default Teams;
