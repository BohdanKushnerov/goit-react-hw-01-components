import { Statistics } from './Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from './Friends/Friends';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

// username, tag, location, avatar, stats
export const App = () => {
  // const {username, tag, location, avatar, stats} = user;
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
