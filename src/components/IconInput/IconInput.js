import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const Element = size === 'small' ? Base : Large

	return (
		<Wrapper style={{ '--width': width + 'px' }}>
			<VisuallyHidden>{label}</VisuallyHidden>
			<IconWrapper style={{ '--size': (size === 'small' ? 16 : 24) + 'px' }}>
				<Icon
					id={icon}
					size={size === 'small' ? 16 : 24}
					strokeWidth={size === 'small' ? 1 : 2}
				/>
			</IconWrapper>
			<Element type='text' placeholder={placeholder} />
		</Wrapper>
	)
}

const Wrapper = styled.label`
	isolation: isolate;
	position: relative;

	display: block;
	width: var(--width);

	color: ${COLORS.gray700};

	transition: color 0.15s ease-out;

	&:hover {
		color: ${COLORS.black};
	}
`

const IconWrapper = styled.div`
	position: absolute;
	display: block;
	top: 0;
	bottom: 0;
	left: 0;
	width: var(--size);
	height: var(--size);
	margin: auto;
`

const Base = styled.input`
	appearance: none;

	width: 100%;
	padding: 4px 2px 4px 24px;

	color: inherit;
	background: transparent;
	border: none;

	border-bottom: 1px solid ${COLORS.black};
	border-radius: 1px;

	font-size: ${14 / 16}rem;
	font-weight: 700;
	line-height: 1.1721428571;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

	&:focus {
		outline: 2px auto -webkit-focus-ring-color;
		outline-offset: 2px;
	}
`

const Large = styled(Base)`
	font-size: ${18 / 16}rem;
	padding: 8px 4px 8px 36px;
	border-bottom: 2px solid ${COLORS.black};
`

export default IconInput;
