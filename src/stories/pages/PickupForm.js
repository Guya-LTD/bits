import React from 'react'
import { Formiz, useForm, FormizStep, useField } from '@formiz/core' // Import useForm
import { isEmail } from '@formiz/validations'

// 1. Create a reusable field
const MyField = (props) => {
    const {
      errorMessage,
      id,
      isValid,
      isPristine,
      isSubmitted,
      resetKey,
      setValue,
      value,
    } = useField(props)
    const { label, type, required } = props
    const [isFocused, setIsFocused] = React.useState(false);
    const showError = !isValid && !isFocused && (!isPristine || isSubmitted)
  
    return (
      <div className={`demo-form-group ${showError ? 'is-error' : ''}`}>
        <label
          className="demo-label"
          htmlFor={id}
        >
          { label }
          {required && ' *'}
        </label>
        <input
          key={resetKey}
          id={id}
          type={type || 'text'}
          value={value || ''}
          className="demo-input"
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? `${id}-error` : null}
        />
        {showError && (
          <div id={`${id}-error`} className="demo-form-feedback">
            { errorMessage }
          </div>
        )}
      </div>
    )
}
  
  
  // 2. Create a form with multi steps & fields
  const MyForm = () => {
    const myForm = useForm()
    const [isLoading, setIsLoading] = React.useState(false)
    const submitForm = (values) => {
      setIsLoading(true)
  
      setTimeout(() => {
        setIsLoading(false)
        alert(JSON.stringify(values))
        myForm.invalidateFields({
          email: 'You can display an error after an API call',
        })
        const step = myForm.getFieldStepName('email')
        myForm.goToStep(step)
      }, 1000)
    }
    return (
      <Formiz onValidSubmit={submitForm} connect={myForm}>
        <form
          noValidate
          onSubmit={myForm.submit}
          className="demo-form"
          style={{ minHeight: '16rem' }}
        >
          <div className="demo-form__tabs">
            {myForm.steps.map(step => (
              <button
                key={step.name}
                className={`demo-form__tab ${step.name === myForm.currentStep.name ? 'is-active' : ''}`}
                type="button"
                onClick={() => myForm.goToStep(step.name)}
              >
                {!step.isValid && step.isSubmitted && (
                  <small className="mr-2">⚠️</small>
                )}
                { step.label }
              </button>
            ))}
          </div>
  
          <div className="demo-form__content">
            <FormizStep name="step1" label="Step A">
              
              <MyField
                name="name"
                label="Name"
                required="Name is required"
                defaultValue="Hailey Terry"
              />
  
              <MyField
                name="nickname"
                label="Nickname"
                defaultValue="hailey"
              />
  
            </FormizStep>
            <FormizStep name="step2" label="Step B">
              
              <MyField
                name="email"
                label="Email"
                type="email"
                required="Email is required"
                validations={[
                  {
                    rule: isEmail(),
                    message: 'Not a valid email',
                  }
                ]}
                defaultValue="hailey@company.com"
              />
  
            </FormizStep>
            <FormizStep name="step3" label="Step C">
              
              <MyField
                name="password"
                label="Password"
                type="password"
              />
              <MyField
                name="passwordConfirm"
                label="Confirm password"
                type="password"
                validations={[
                  {
                    rule: (value) => myForm.values.password === value,
                    deps: [myForm.values.password],
                    message: 'Passwords do not match',
                  }
                ]}
              />
  
            </FormizStep>
          </div>
  
          <div className="demo-form__footer">
            <div
              className="ml-auto"
              style={{ minWidth: '6rem' }}
            >
              <button
                className="demo-button is-full is-primary"
                type="submit"
                disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </Formiz>
    )
  }

export default MyForm;