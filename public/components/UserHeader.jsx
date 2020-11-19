import React from 'react';
import styled from 'styled-components';


const UserHeaderBar = styled.div`
display: flex;

.profilepic {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  margin: 12px 12px 12px 24px;
}

.location {
  width: 17px;
  height: 17px;
  margin-top: 3px;
  vertical-align: sub;
  display: inline-block;
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
      <img className="profilepic" src={profilePhoto}/>
      <div className="userHead"><b>{name}</b> wrote a review {reviewDate}
      <div className="userInfo"><img className="location" src="https://tripreviews.s3-us-west-1.amazonaws.com/icons8-marker-50.png"></img>{location} • {contributions} contributions</div></div>
    </UserHeaderBar>

  )

}

export default UserHeader;

