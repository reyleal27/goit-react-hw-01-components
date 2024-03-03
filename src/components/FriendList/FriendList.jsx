
import './FriendStyle.css';
import FriendItem from "./FriendItem";
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
             {friends.map(({id,name, avatar, isOnline})=>{
                return <FriendItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                />
                })}
        </ul>
     
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    )}




export default FriendList;
