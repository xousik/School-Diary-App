import React from 'react';
import { NewsSectionHeader, Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NotesSection.styles';
import { useNote } from 'hooks/useNote';

const NotesSection = () => {
  const { notes } = useNote();

  return (
    <Wrapper>
      <NewsSectionHeader>Your Notes</NewsSectionHeader>
      {notes.map((note) => (
        <ArticleWrapper key={note.title}>
          <TitleWrapper>
            <h3>{note.title}</h3>
          </TitleWrapper>
          <ContentWrapper>
            <p>{note.content}</p>
          </ContentWrapper>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NotesSection;
