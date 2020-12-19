import React, { useState, useEffect } from 'react'
import {
  StyledFormWrapper,
  StyledForm,
  StyledFieldset,
  StyledInput,
  StyledTextArea,
  FormImage,
  StyledButton
} from './FormElements'

const initialState = {
  name: '',
  email: '',
  video: '',
  phone: '',
  location: '',
  handle: '',
  country: '',
  hobbies: '',
  change: '',
  invest: '',
  schedule: '',
  experience: ''
}

const Form = () => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submitted');
    console.log(state);

    for (let key in state) {
      if(state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('')
    alert('Message has been submitted!')
    setState({
      name: '',
      email: '',
      video: '',
      phone: '',
      location: '',
      handle: '',
      country: '',
      hobbies: '',
      change: '',
      invest: '',
      schedule: '',
      experience: ''
    })
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value

    setState(prev => ({...prev, [inputName]: value}))
  }
  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
        <StyledFieldset>
          <legend>Did you complete the video</legend>
          <label>
            <input
              type='radio'
              value='Yes'
              name='video'
              checked={state.video === 'Yes'}
              onChange={handleInput}
            />
            Yes
          </label>
          <label>
            <input
              type='radio'
              value='No'
              name='video'
              checked={state.video === 'No'}
              onChange={handleInput}
            />
            No
          </label>
        </StyledFieldset>
        <label htmlFor='email'>Email</label>
          <StyledInput
            type='email'
            name='email'
            onChange={handleInput}
          />
          <label htmlFor='name'>Name</label>
          <StyledInput
            type='text'
            name='name'
            onChange={handleInput}
          />
          <label htmlFor='phone'>Phone Number</label>
          <StyledInput
            type='text'
            name='phone'
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>How did you find me?</legend>
            <label>
              <input
                type='radio'
                value= 'Tik Tok'
                name= 'location'
                checked={state.location === 'Tik Tok'}
                onChange={handleInput}
              />
              Tik Tok
            </label>
            <label>
              <input
                type='radio'
                value= 'Facebook'
                name= 'location'
                checked={state.location === 'Facebook'}
                onChange={handleInput}
              />
              Facebook
            </label>
            <label>
              <input
                type='radio'
                value= 'Instagram'
                name= 'location'
                checked={state.location === 'Instagram'}
                onChange={handleInput}
              />
              Instagram
            </label>
          </StyledFieldset>
          <label htmlFor='phone'>What is your Facebook name & Instagram handle?</label>
          <StyledInput
            type='text'
            name='handle'
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>What country are you from?</legend>
            <label>
              <input
                type='radio'
                value= 'USA'
                name= 'country'
                checked={state.country === 'USA'}
                onChange={handleInput}
              />
              USA
            </label>
            <label>
              <input
                type='radio'
                value= 'Canada'
                name= 'country'
                checked={state.country === 'Canada'}
                onChange={handleInput}
              />
              Canada
            </label>
            <label>
              <input
                type='radio'
                value= 'France'
                name= 'country'
                checked={state.country === 'France'}
                onChange={handleInput}
              />
              France
            </label>
            <label>
              <input
                type='radio'
                value= 'Australia'
                name= 'country'
                checked={state.country === 'Australia'}
                onChange={handleInput}
              />
              Australia
            </label>
            <label>
              <input
                type='radio'
                value= 'Mexico'
                name= 'country'
                checked={state.country === 'Mexico'}
                onChange={handleInput}
              />
              Mexico
            </label>
            <label>
              <input
                type='radio'
                value= 'Germany'
                name= 'country'
                checked={state.country === 'Germany'}
                onChange={handleInput}
              />
              Germany
            </label>
            <label>
              <input
                type='checkbox'
                name='other'
                onChange={handleInput}
              />
              Other
            </label>
          </StyledFieldset>
          <label htmlFor='hobbies'>Tell me a little about yourself.
          What's your age, what do you do for work, are you in school,
          mmarried, hobbies, etc?
          </label>
          <StyledTextArea
            name='hobbies'
            onChange={handleInput}
          />
          <label htmlFor='change'>How much would an extra $500/m
          do for you? How could it change your life/current
          situation?
          </label>
          <StyledTextArea
            name='change'
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Do you have $100 to invest to begin today?</legend>
            <label>
              <input
                type='radio'
                value= 'Yes'
                name= 'invest'
                checked={state.invest === 'Yes'}
                onChange={handleInput}
              />
              Yes
            </label>
            <label>
              <input
                type='radio'
                value= 'No'
                name= 'invest'
                checked={state.invest === 'No'}
                onChange={handleInput}
              />
              No, but I'll find it!
            </label>
          </StyledFieldset>
          <label htmlFor='schedule'>Do you have a busy schedule? If so,
          what is it like? How much time do you spend on your phone?
          </label>
          <StyledTextArea
            name='schedule'
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Have you done Network Marketing before?</legend>
            <label>
              <input
                type='radio'
                value= 'It Works'
                name= 'experience'
                checked={state.experience === 'It Works'}
                onChange={handleInput}
              />
              Yes, it works
            </label>
            <label>
              <input
                type='radio'
                value= 'Another'
                name= 'experience'
                checked={state.experience === 'Another'}
                onChange={handleInput}
              />
              Yes, another company
            </label>
            <label>
              <input
                type='radio'
                value= 'No'
                name= 'experience'
                checked={state.experience === 'No'}
                onChange={handleInput}
              />
              No
            </label>
            <label>
              <input
                type='radio'
                value= 'Customer'
                name= 'experience'
                checked={state.experience === 'Customer'}
                onChange={handleInput}
              />
              No, I'm currently an It Works customer
            </label>
          </StyledFieldset>
            <FormImage src='../images/disclosure.jpg' alt='Disclosure Statement'/>
          <StyledButton>Let's Get Started</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  )
}

export default Form
