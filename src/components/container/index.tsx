import React from 'react';
import { Menu } from '../menu';

export const Container = (props: any) => {
	const { children } = props;
	return (
		<div className="container">
			{children}

			{/* Menu */}
			<Menu />
		</div>
	);
};
