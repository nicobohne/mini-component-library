/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
	let Element

	switch (size) {
		case 'small':
			Element = Small
			break
		case 'large':
			Element = Large
			break
		default:
			Element = Base
	}

	return (
		<Element role='progressbar' aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
			<Progress aria-hidden value={value} />
			<VisuallyHidden>{value}%</VisuallyHidden>
		</Element>
	)
}

const Base = styled.div`
	width: 370px;
	background: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

	height: 12px;
	border-radius: 4px;
	overflow: hidden;
`

const Small = styled(Base)`
	height: 8px;
`

const Large = styled(Base)`
	height: 24px;
	border-radius: 8px;
	padding: 4px;
`

const Progress = styled.div`
	width: 100%;
	height: 100%;

	border-radius: 4px;
	overflow: hidden;

	&::after {
		content: '';
		display: block;

		width: 100%;
		height: 100%;

		transform: translateX(-${p => 100 - p.value}%);
		transition: transform 1s ease-in-out;

		background: ${COLORS.primary};
	}
`

export default ProgressBar;
