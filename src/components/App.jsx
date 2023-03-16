import { Statistics } from './Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from './Friends/FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
