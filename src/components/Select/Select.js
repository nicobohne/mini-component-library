import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children)

	return (
		<Wrapper>
			<Native value={value} onChange={onChange}>
				{children}
			</Native>
			<Label>{displayedValue}</Label>
			<IconWrapper>
				<Icon aria-hidden id='chevron-down' size={24} strokeWidth={2} />
			</IconWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	isolation: isolate;
	position: relative;

	width: fit-content;

	color: ${COLORS.gray700};
	background: ${COLORS.transparentGray15};
	border: none;
	border-radius: 8px;

	padding: 12px 52px 12px 16px;

	transition: color 0.15s ease-out;

	&:hover {
		color: ${COLORS.black};
	}

	&:focus-within {
		outline: 5px auto -webkit-focus-ring-color;
	}
`

const Native = styled.select`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	appearance: none;

	cursor: pointer;

	&:focus {
		outline: none;
	}
`

const Label = styled.span`
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.171875;
`

const IconWrapper = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;

	pointer-events: none;
`

export default Select;
