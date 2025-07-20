import Popover from "../Popover/Popover";
import Avatar from "../Avatar/Avatar";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfilePopover = ({ avatarDetails }: any) => {
  return (
    <Popover
      trigger={<Avatar avatarDetails={avatarDetails} />}
      triggerType="hover"
    >
      <ProfileCard
        imageUrl={avatarDetails.profileImage}
        name={`${avatarDetails.firstName} ${avatarDetails.lastName}`}
        role={avatarDetails.role}
        email={avatarDetails.email}
      />
    </Popover>
  );
};

export default ProfilePopover;
