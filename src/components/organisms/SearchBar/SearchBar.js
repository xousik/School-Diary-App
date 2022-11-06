import { useEffect, useState } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const { findStudents, matchingStudents } = useStudents();

  useEffect(() => {
    if (!searchPhrase) return;
    findStudents(searchPhrase);
  }, [searchPhrase]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input autoComplete="off" onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="Search" />
        {searchPhrase && matchingStudents.length ? (
          <SearchResults isVisible>
            {matchingStudents.map((student) => (
              <SearchResultsItem key={student.name}>{student.name}</SearchResultsItem>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
