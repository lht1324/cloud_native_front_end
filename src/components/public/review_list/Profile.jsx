import "./Profile.css"
import Spacer from "../Spacer";
import Row from "../Row";

function Profile({ profileSrc, author}) {
    return (
        <Row className="profile_wrapper">
            <div className="image_container">
                <img src={profileSrc} alt={author} style={{width: "32px", height: "32px"}}/>
            </div>
            <Spacer width="5px"/>
            <h4 className="author" style={{justifySelf: "end"}}>{author}</h4>
        </Row>
    )
}

export default Profile;