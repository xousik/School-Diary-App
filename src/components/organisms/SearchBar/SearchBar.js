import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const { findStudents, matchingStudents } = useStudents();

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, inputValue } = useCombobox({
    items: matchingStudents,
    onInputValueChange: findStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length && inputValue} {...getMenuProps()}>
          {isOpen
            ? matchingStudents.map((item, index) => (
                <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.name}>
                  {item.name}
                </SearchResultsItem>
              ))
            : null}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
