import React from 'react';
import { StyledViewWrapper, FormWrapper, StyledFormTitle, InputFormField, ContentFormField, StyledButton } from './Notes.styles';
import { useNote } from 'hooks/useNote';

const Notes = () => {
  const { title, content, handleSubmit, handleTitleChange, handleContentChange } = useNote();

  return (
    <FormWrapper>
      <StyledViewWrapper as="form" onSubmit={handleSubmit}>
        <StyledFormTitle>Add new note</StyledFormTitle>
        <InputFormField notes="true" label="Title" id="title" name="title" value={title} onChange={handleTitleChange} />
        <ContentFormField notes="true" textarea label="Content" id="content" name="content" value={content} onChange={handleContentChange} />
        <StyledButton type="submit">Add</StyledButton>
      </StyledViewWrapper>
    </FormWrapper>
  );
};

export default Notes;
