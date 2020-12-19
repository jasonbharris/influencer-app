import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  margin-top: 72%;

  @media screen and (max-width: 768px) {
    margin-top: 110%;
  }
`

export const StyledForm = styled.form`
  width: 100%;
  padding: 40px;
  background-color: #FFFBFC;
  border-radius: 10px;
  box-sizing: border-box;
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px sold #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

export const StyledButton = styled.button`
  display: block;
  background-color: #EC058E;
  color: #F7F7FF;
  font-size: 1.3rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  margin: 20px auto;
  width: 80%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`

export const StyledTextArea = styled.textarea`
 background-color: #eee;
 width: 100%;
 min-height: 100px;
 resize: none;
 border-radius: 5px;
 border: 1px sold #ddd;
 margin: 10px 0 20px 0;
 padding: 20px;
 box-sizing: border-box;
`

export const FormImage = styled.img`
  width: 80%;
  object-fit: cover;
  margin: 30px 0 0 10%;
`
