import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  Description,
  Name,
  StatsList,
  Item,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <ProfileCard>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <StatsList>
        <Item>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
