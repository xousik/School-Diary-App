import styled from 'styled-components';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 50px 25px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  padding: 20px;
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
    margin-top: 15px;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  column-gap: 25px;
  margin-top: 20px;

  p {
    margin: 0;
  }

  img {
    max-width: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
