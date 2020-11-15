import React from 'react';

const UserHeader = ({name, profilePhoto, reviewDate, location, contributions})=> {
  return(
    <div>
      <img src={profilePhoto}/>
  <div><h3>{name}</h3> wrote a review {reviewDate}
  <div className="userInfo">{location} • {contributions} contributions</div>
  <div className="elipsisMenu">[...]</div>

  </div>


    </div>
  )

}

export default UserHeader;

