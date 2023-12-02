import React from "react";
import "./ProfileUserInfoStyle.scss"
import "../../../../styles/texts.scss"

const ProfileUserInfo = () => {
  return (
    <div className="UserInfoContainer">
      <div className="UserInfoTitleContainer">
        <h3 className="UserInfoTitle">
          이정명
        </h3>
        <h5 className="\SubTitle">
          어떠한 경우에도 꾸준한 배움의 자세로 살아온 개발자
        </h5>
      </div>
      <div className="UserInfoListContainer">
        {/* FIXME - 이메일 로고 주입 */}
        <div>
          <image ></image>
          <p className="SubContent">
            leejm9704@naver.com
          </p>
        </div>
        <div>
          {/* FIXME - 전화 로고 주입 */}
          <image ></image>
          <p className="SubContent">
            010-4534-4955
          </p>
        </div>
        <div>
          {/* FIXME - 달력 로고 주입 */}
          <image ></image>
          <p className="SubContent">
            1997년생
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileUserInfo;
