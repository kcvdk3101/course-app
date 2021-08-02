import React from 'react'
import { render } from '@testing-library/react'
import CourseForm from './CourseForm.jsx'

function renderCourseForm(params) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => { },
    onChange: () => { },
  }

  const props = { ...defaultProps, ...params }
  return render(<CourseForm {...props} />)
}

it('should render Header of Add Course', () => {
  const { getByText } = renderCourseForm()
  getByText("Add Course")
})

it('should render label "Save" when not saving ', () => {
  const { getByText } = renderCourseForm()
  getByText("Save")
})

it('should render label "Saving..." when saving ', () => {
  const { getByText } = renderCourseForm({ saving: true })
  getByText("Saving...")
})