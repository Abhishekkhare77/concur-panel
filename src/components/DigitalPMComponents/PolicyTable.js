import React from 'react'
import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from '@carbon/react';
import { useNavigate } from 'react-router-dom';

const PolicyTable = ({ rows, headers }) => {
  const navigate = useNavigate();
  return (
    <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getHeaderProps, getTableProps }) => (
        <TableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      onClick={() => {
                        // Pass the unique policy ID or relevant data to the navigation
                        navigate(`/policyview/${row.id}`);
                      }}
                    >
                      {cell.value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  );
};

export default PolicyTable;
