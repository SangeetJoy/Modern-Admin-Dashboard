import type { AssigneeDetails } from "../../../data";

interface AvatarDetails {
  avatarDetails: AssigneeDetails;
}

const Avatar = ({ avatarDetails }: AvatarDetails) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={avatarDetails.profileImage}
        alt={avatarDetails.firstName}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="">{`${avatarDetails.firstName} ${avatarDetails.lastName}`}</span>
    </div>
  );
};

export default Avatar;
