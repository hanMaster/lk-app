import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    id: 1,
    currency: 'us dollars',
    amount: 4000,
    date: new Date().toLocaleDateString(),
    status: 'Closed',
  },
  {
    id: 2,
    currency: 'us dollars',
    amount: 46000,
    date: new Date().toLocaleDateString(),
    status: 'Closed',
  },
  {
    id: 3,
    currency: 'us dollars',
    amount: 185000,
    date: new Date().toLocaleDateString(),
    status: 'Closed',
  },
  {
    id: 4,
    currency: 'us dollars',
    amount: 17000,
    date: new Date().toLocaleDateString(),
    status: 'Closed',
  },
];

const ArchiveList = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className="container">
      <TableContainer component={Paper} style={{ marginTop: '50px' }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order&nbsp;id</TableCell>
              <TableCell align="right">Currency</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Files</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                onClick={() => history.push(`order/${row.id}`)}
                className="tbl"
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.currency}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <DescriptionIcon />
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ArchiveList;
