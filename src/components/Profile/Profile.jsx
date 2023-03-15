import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  Description,
  Name,
  Tag,
  Location,
  StatsList,
  ItemList,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsList>
        <ItemList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ItemList>
        <ItemList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ItemList>
        <ItemList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ItemList>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
