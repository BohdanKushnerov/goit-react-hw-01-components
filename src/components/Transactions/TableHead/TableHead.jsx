import { Thead, Th } from './TableHead.styled';

export const TableHead = () => {
  return (
    <Thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </Thead>
  );
};
