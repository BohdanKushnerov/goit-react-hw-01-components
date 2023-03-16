import PropTypes from 'prop-types';
import { Item, Friends } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </Item>
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};
