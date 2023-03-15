import PropTypes from 'prop-types';
import { Friends, Item, Status, Avatar, Name } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </Friends>
  );
};

// {
//   "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//   "name": "Mango",
//   "isOnline": true,
//   "id": 1812
// },

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
