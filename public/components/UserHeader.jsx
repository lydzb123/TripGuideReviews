import React from 'react';
import styled from 'styled-components';


const UserHeaderBar = styled.div`
display: flex;

img {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  margin: 12px 12px 12px 24px;

}

.userHead {
  margin: 14px 0 0 0;
  display: block;
  font-size: 12px;

}

.userInfo {
  font-size: 12px;
  color: grey;
}
`;

const UserHeader = ({name, profilePhoto, reviewDate, location, contributions}) => {


  return(
    <UserHeaderBar>
      <img src={profilePhoto}/>
      <div className="userHead"><b>{name}</b> wrote a review {reviewDate}
      <div className="userInfo">{location} • {contributions} contributions</div></div>
    </UserHeaderBar>

  )

}

export default UserHeader;

