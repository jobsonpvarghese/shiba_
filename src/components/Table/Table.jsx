import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { Container } from "@mui/material"

const columns = [
  { id: "no", label: "SI. NO", minWidth: 20 },
  { id: "addr", label: "Wallet Address", minWidth: 200 },
  {
    id: "amt",
    label: "Quantity",
    minWidth: 70,
    align: "right",
    format: value => value.toFixed(2)
  }
]

function createData(no, addr, amt) {
  return { no, addr, amt }
}

const rows = [
  createData("1", "whvuvyiwuev", 1324171354, 3287263),
  createData("2", "CvwenvwjoenvweN", 1403500365, 9596961),
  createData("3", "IwelvnweonvwoevnoweiT", 60483973, 301340),
  createData("4", "UwvljnwevnwelvS", 327167434, 9833520),
  createData("5", "wnevowenvnweovnweA", 37602103, 9984670),
  createData("6", "AUwekvmwekvmewv", 25475400, 7692024),
  createData("7", "DewklnvwenvlkwenvE", 83019200, 357578),
  createData("8", "IEwevmwke;vmwekwevwe", 4857000, 70273),
  createData("9", "MXvnwelvknwelvwedv", 126577691, 1972550),
  createData("10", "JqnqubciqubcouqecbuyeoincjacP", 126317000, 377973),
  createData("11", "FlcnqeconqoecnoqecR", 67022000, 640679),
  createData("12", "GcibqeicbqieucbiqeB", 67545757, 242495),
  createData("13", "RUcoqebcobcoqbecoqbec", 146793744, 17098246),
  createData("14", "NGcqkeckjqbecqecbjqewo", 200962417, 923768),
  createData("15", "BqebcqoebcoqboqeR", 210147125, 8515767)
]

export default function DataTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Container maxWidth="lg">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ backgroundColor: "#0e46a3", color: "white" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ backgroundColor: "lightgrey", color: "black" }}>
                          {column.format && typeof value === "number" ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ backgroundColor: "#0e46a3", color: "white" }}
        />
      </Paper>
    </Container>
  )
}
