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
import EditTeacher from "../components/EditTeacher";

const Teachers = () => {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://65bb677f52189914b5bc02b7.mockapi.io/teachers"
      );
      const data = await res.data;
      setTeachers(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTeachers();
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
        <Typography variant="h4">Teachers</Typography>
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
      {teachers.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow
                  key={teacher.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {teacher.id}
                  </TableCell>
                  <TableCell>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={teacher.avatar}
                      alt={teacher.firstName}
                    />
                  </TableCell>
                  <TableCell>{teacher.firstName}</TableCell>
                  <TableCell>{teacher.lastName}</TableCell>
                  <TableCell>{teacher.age}</TableCell>
                  <TableCell>
                    <Actions
                      type="teacher"
                      data={teacher}
                      handleEdit={() => handleEdit(teacher)}
                      handleDelete={() => handleDelete("teachers", teacher.id)}
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

export default Teachers;
