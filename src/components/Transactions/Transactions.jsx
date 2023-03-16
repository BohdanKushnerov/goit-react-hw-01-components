import PropTypes from 'prop-types';
import { TableHead } from './TableHead/TableHead';
import { TableDataInfo } from './TableDataInfo/TableDataInfo';
import { Table, TableRow } from './Transaction.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead />

      <tbody>
        {transactions.map(obj => {
          return (
            <TableRow key={obj.id}>
              <TableDataInfo
                type={obj.type}
                amount={obj.amount}
                currency={obj.currency}
              />
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
