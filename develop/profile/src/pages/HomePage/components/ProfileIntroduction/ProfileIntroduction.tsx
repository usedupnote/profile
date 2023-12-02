import React from "react";
import "./ProfileIntroductionStyle.scss"
import "../../../../styles/texts.scss"

const ProfileIntroduction = () => {
  return (
    <div className="IntroductionContainer">
      <p className="Content font5">
        - react 기반 프론트엔드 개발자
      </p>
      <p className="Content font5">
        - MVVM 베이스 통신상태 관리 웹/앱 개발 경험 보유
      </p>
      <p className="Content font5">
        - 앱 개발 프로젝트 진행
      </p>
    </div>
  );
};
export default ProfileIntroduction;
