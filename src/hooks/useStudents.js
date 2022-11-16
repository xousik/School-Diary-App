import { useCallback, useState } from 'react';
import axios from 'axios';

export const useStudents = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);

  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (studentId = '') => {
    try {
      const result = await axios.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/groups/${groupId || null}`);
      // console.log(result);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = ({ inputValue }) => {
    // console.log(`input value: ${inputValue}`);
    axios
      .post(`/students/search`, {
        data: inputValue,
      })
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
