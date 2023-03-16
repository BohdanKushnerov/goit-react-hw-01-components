import { Statistics } from './Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from './Friends/FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';
import { Container } from './App.styled';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
