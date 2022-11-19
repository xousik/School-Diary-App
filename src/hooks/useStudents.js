import { useCallback, useState } from 'react';
import axios from 'axios';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);

  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (studentId = '') => {
    try {
      const result = await studentsAPI.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId || null}`);
      // console.log(result);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = ({ inputValue }) => {
    // console.log(`input value: ${inputValue}`);
    studentsAPI
      .post(`/students/search`, { data: inputValue })
      .then(({ data }) => setMatchingStudents(data.students))
      .catch((err) => console.log(err));
  };

  return {
    getStudentsByGroup,
    getGroups,
    findStudents,
    matchingStudents,
    getStudentById,
  };
};
