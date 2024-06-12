import userInfo from "../../props/user";

import userPhoto from "./../../img/user-photo.png";

const AsideUser = () => {
  return (
    <div className="aside__user">
      <img className="aside__user-photo" alt="img" src={userPhoto}></img>
      <p className="aside__user-name">{userInfo.name}</p>
      <p className="aside__user-position">{userInfo.position}</p>
    </div>
  );
};

export default AsideUser;
