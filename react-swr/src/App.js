import React from "react";
import useSWR, { SWRConfig } from "swr";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  return (
    <SWRConfig
      value={{
        focusThrottleInterval: 20000,
        fetcher,
      }}
    >
      <Profile />
    </SWRConfig>
  );
}

function Profile() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  console.log(data);
  if (error) return <div className="loading-text">failed to load</div>;
  if (!data) return <div className="loading-text">loading...</div>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Id</b>
            </TableCell>
            <TableCell align="right">
              <b>Email ID</b>
            </TableCell>
            <TableCell align="right">
              <b>Phone number</b>
            </TableCell>
            <TableCell align="right">
              <b>website</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
