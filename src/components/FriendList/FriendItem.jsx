import { FaCircle } from "react-icons/fa";
import PropTypes from 'prop-types';

const FriendItem = ({ name, avatar, isOnline}) =>{
    return (
        <li className="item">
            <span className={`status ${isOnline ? "online" : "offline"}`}><FaCircle /></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
       </li>
    )
}

FriendItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
    }

export default FriendItem;