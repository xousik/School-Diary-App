import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';
import FormField from 'components/moleculs/FormField/FormField';

export const FormWrapper = styled.div`
  padding: 20px;
  margin-top: 10%;
  width: 100%;
  height: 100%;
`;

export const StyledViewWrapper = styled(ViewWrapper)`
  margin: 0 auto;
`;

export const StyledFormTitle = styled(Title)`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputFormField = styled(FormField)`
  width: 100%;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0 auto 15px auto;
`;

export const ContentFormField = styled(FormField)`
  height: 400px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0 auto;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  display: block;
  margin: 35px auto 0 auto;
`;
