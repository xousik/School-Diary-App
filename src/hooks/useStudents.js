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

  const getStudents = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/students/${groupId}`);
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
    getStudents,
    getGroups,
    findStudents,
    matchingStudents,
  };
};
