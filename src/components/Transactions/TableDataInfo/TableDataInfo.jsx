import PropTypes from 'prop-types';
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

TableDataInfo.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
