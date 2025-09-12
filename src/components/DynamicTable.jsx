import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const DynamicTable = ({ data }) => {
  if (!data.length) return null;

  // Get headers from the first data item
  const headers = Object.keys(data[0]);

  // Format cell value based on its type
  const formatValue = (value) => {
    if (value === null || value === undefined) return "-";
    if (value instanceof Date) return value.toLocaleString();
    if (typeof value === "boolean") return value ? "Yes" : "No";
    return String(value);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>
                {header.charAt(0).toUpperCase() +
                  header.slice(1).replace(/_/g, " ")}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell key={`${index}-${header}`}>
                  {formatValue(row[header])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
