import { useEffect, useState } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = () => {
    const students = findStudents(searchPhrase);
    setMatchingStudents(students);
    console.log(`studenci: ${students}`);
  };

  findStudents(searchPhrase);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="Search" />
        {searchPhrase && matchingStudents ? (
          <SearchResults>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
