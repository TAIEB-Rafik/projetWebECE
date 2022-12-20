import * as React from 'react';
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Monkey d luffy",25,"2 mars 2022","Approuved"),
  createData("Edward Newgate",12,"18 decembre 2022","Pending"),
  createData("Luccy Artefilia",22,"31 aout 2022","delivred"),
  createData("Alexander forman",11,"2 mars 2022","Approuved"),
  createData("Tobi Cristiano",21,"2 mars 2022","Approuved"),
];

const statusStyle=(status)=>{
    if(status === 'Approuved'){
        return{
            background:'rgb(145 254 159 /47%)',
            color: 'green',
        }
    } else if(status === 'Pending'){
        return{
            background:'#ffad8f',
            color: 'red',
        }
    } else {
        return{
            background: '#59bfff',
            color: 'white',
        }
    }
}
export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Donnes récentes</h3>
        <TableContainer component={Paper} className="TableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produit</TableCell>
            <TableCell align="left">Identifiant</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status'style={statusStyle(row.status)}>
                    {row.status}
                </span>
                </TableCell>
              <TableCell align="left" className='Details'>
                DETAILS
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
      );
}