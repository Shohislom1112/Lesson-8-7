import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Actions, Loader, AddStudent } from "./../components";
import EditStudent from "../components/EditStudent";

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://65bb677f52189914b5bc02b7.mockapi.io/students"
      );
      const data = await res.data;
      setStudents(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <Stack
        direction="row"
        sx={{
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Students</Typography>
      </Stack>

      {loading ? <Loader /> : null}
      {error ? (
        <Typography
          variant="h4"
          color="error"
          sx={{ textAlign: "center", paddingTop: "20px" }}
        >
          {error.message}
        </Typography>
      ) : null}
      {students.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  
                >
                  <TableCell component="th" scope="row">
                    {student.id}
                  </TableCell>
                  <TableCell>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={student.avatar}
                      alt={student.firstName}
                    />
                  </TableCell>
                  <TableCell>{student.firstName}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>
                    <Actions
                      type="student"
                      data={student}
                      handleEdit={() => handleEdit(student)}
                      handleDelete={() => handleDelete("students", student.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};

export default Students;
