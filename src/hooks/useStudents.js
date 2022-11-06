import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  const findStudents = (searchPhrase) => {
    try {
      const { data } = axios.post(`/students/search`, {
        data: searchPhrase,
      });
      console.log(`to sa dane: ${data}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    students,
    groups,
    findStudents,
  };
};
