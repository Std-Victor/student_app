import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../../redux/student_asyncThunk/students.api.calls";
import {
  getOldUserData,
  setNull,
} from "../../redux/student_asyncThunk/students.slice";

import "./view.styles.css";

export const View = () => {
  const { studentList: students, pending } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const handleAddress = (ads) => {
    const { street, suite, city } = ads;
    return (ads = { street, suite, city });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>usename</th>
          <th>email</th>
          <th>address</th>
          <th>phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pending
          ? Array(10).fill('').map((item, index) => <tr key={index}>
          <td colSpan={7}>
            <div className="skeleton"></div>
          </td>
        </tr>)
          : students.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <div className="action__btn">
                    <button
                      className="btn__edit py-1 px-2"
                      onClick={() => dispatch(getOldUserData(user))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </button>
                    <button
                      className="btn__remove py-1 px-2 "
                      onClick={() => {
                        dispatch(deleteStudent(user.id));
                        setTimeout(() => dispatch(setNull()), "3500");
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
