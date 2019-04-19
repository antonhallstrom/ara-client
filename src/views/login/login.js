import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as Layout from '../../components/layouts'
import styled from '@emotion/styled'
import { Constraint, Flex, Space } from '../../components/elements'

const Input = styled.input`
  outline: none;
  border: 1px solid
    ${props =>
      props.valid
        ? props.theme.colors.purple.light
        : props.theme.colors.secondary.dark};
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.sizes[4]};
  color: ${props => props.theme.colors.secondary.dark};
  padding: 16px;
  box-sizing: border-box;
  caret-color: ${props => props.theme.colors.purple.light};
  resize: none;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.purple.light};
  }
`

const Button = styled.button`
  border-radius: 4px;
  padding: 12px 16px;
  outline: none;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  font-size: ${props => props.theme.fonts.sizes[3]};
  text-transform: uppercase;
  color: ${props => props.theme.colors.purple.default};
  border: 2px solid ${props => props.theme.colors.purple.default};
  cursor: pointer;
  background-color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors.purple.dark};
  }
`

export function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(event) {
    setUsername(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function validator(value) {
    return value.length > 0
  }

  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <Space y="1">
            <Input
              placeholder="Username"
              onChange={handleUsername}
              valid={validator(username)}
            />
          </Space>
          <Space y="1">
            <Input
              placeholder="Password"
              type="password"
              valid={validator(password)}
              onChange={handlePassword}
            />
          </Space>
          <Space y="2">
            <Button
              onClick={() =>
                props.onUserLogin({
                  username: username,
                  password: password,
                })
              }
            >
              Sign in
            </Button>
          </Space>
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}

Login.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
}
