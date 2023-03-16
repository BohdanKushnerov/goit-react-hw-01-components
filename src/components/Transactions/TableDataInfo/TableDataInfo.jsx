import { TableData } from './TableDataInfo.styled';

export const TableDataInfo = ({ type, amount, currency }) => {
  return (
    <>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};
