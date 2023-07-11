import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = 'http://server.test/api/students';
export const fetchStudentsData = createAsyncThunk("student/fetch", async () => {
  const response = await axios.get(endpoint);
  console.log(response);
  return response.data;
});

export const addStudent = createAsyncThunk(
  "student/add",
  async (studentData) => {
    const response = await axios.post(
      endpoint,
      { ...studentData, address: `${studentData.address.street} ${studentData.address.suite}, ${studentData.address.city}`}
    );
    return response.data;
  }
);

export const updateStudent = createAsyncThunk(
  "student/update",
  async (studentData) => {
    const response = await axios.put(
      `${endpoint}/${studentData.id}`,
      { ...studentData }
    );
    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "student/delete",
  async (studentId) => {
    await axios.delete(
      `${endpoint}/${studentId}`
    );
    return studentId;
  }
);
