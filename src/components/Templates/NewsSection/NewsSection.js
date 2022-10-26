import React from 'react';
import { NewsSectionHeader, Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Pariatur ipsam non maiores laboriosam officia recusandae ea unde. Dolores amet non aperiam dolor voluptates at qui. Dolorem sapiente aperiam nostrum. Porro accusantium quia praesentium voluptatibus.',
    image: null,
  },
  {
    title: 'New students at school',
    category: 'Students News',
    content: 'Recusandae illo perspiciatis illo ea eligendi est et rerum sdfjkhasd asdjhfkasjdf ajsdfhjkasdhf askdjfhasjkdfh aksjdfh jka.',
    image: 'https://unsplash.it/400/300',
  },
  {
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Consequatur maxime sint corporis rerum eos consequuntur sunt voluptatem.',
    image: null,
  },
];

export const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="" /> : null}
          </ContentWrapper>
          <Button>click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};
