import * as R from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { Space } from '../../components/elements'

const InputWrapper = styled.div`
  position: relative;
  width: max-content;
`

const Input = styled.input`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`

const Wrapper = styled.div`
  border-radius: 24px;
  background-color: ${props =>
    props.selected ? props.theme.colors.purple.dark : '#efefef'};
  color: ${props =>
    props.selected
      ? props.theme.colors.purple.light
      : props.theme.colors.primary.light};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fonts.sizes[5]};
`

export function Chip(props) {
  const isSelected = R.includes(props.value, props.selected)
  return (
    <InputWrapper>
      <Input
        type="checkbox"
        checked={isSelected}
        value={props.value}
        onChange={() => props.onChange(props.value)}
      />
      <Wrapper selected={isSelected}>
        <Space x="2" y="1">
          {props.label}
        </Space>
      </Wrapper>
    </InputWrapper>
  )
}

Chip.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
