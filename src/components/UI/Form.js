import styled from 'styled-components';

const Form = styled.form`

  width: 100%;

  & input[type='text'],
  & input[type='email'],
  & input[type='password'],
  & input[type='date'],
  & select,
  & textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border-radius: .3rem;
	  border: 1px solid ${props => props.theme.borderColor};
  }
`;

const FormGroup =styled.div`
  margin: .5rem 0;
`;

const FormText = styled.small`
  display: block;
  margin-top: 0.3rem;
  color: #888;
`;

const FormLabel = styled.label`
  margin-bottom: 0.3rem;
`;

Form.FormText = FormText;
Form.FormGroup = FormGroup;
Form.FormLabel = FormLabel;

export default Form;