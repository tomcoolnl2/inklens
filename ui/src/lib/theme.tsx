import React from 'react';
import '../global.css';

export interface Props {
	children: React.ReactNode;
}

export const Theme: React.FC<Props> = ({ children }) => {
	return children;
};
