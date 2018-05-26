import React from 'react'
import { Route } from 'react-router-dom'

export const updateObject = (oldObj, newProps) => {
  return {
    ...oldObj,
    ...newProps
  }
}

export const RouteWithProps = ({ path, exact, strict, component: Component, location, ...rest }) => (
  <Route
    path={path}
    exact={exact}
    strict={strict}
    location={location}
    render={(props) => <Component {...props} {...rest} />}
  />
)

export const checkValidity = (value, rules) => {
  let isValid = true

  if (!rules) {
    return isValid
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }
  if (rules.email) {
    isValid = value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && isValid
  }
  if (rules.mustSelect) {
    isValid = value !== 'none'
  }
  if (rules.number) {
    isValid = isFinite(value) && isValid
  }
  return isValid
}