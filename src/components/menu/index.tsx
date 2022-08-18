import React from 'react';
import { history } from '../../stores/router';

export const Menu = (props: any) => {
	const checkIsActive = (path: string) => {
		if (path === window.location.pathname) {
			return true;
		}

		return false;
	};

	const toPage = (page: string) => {
		history.push(page);
	};

	return (
		<div className="menu">
			{/* Menu */}
			<div className="menu-items">
				<p onClick={() => toPage('/')} className={checkIsActive('/') ? 'active' : ''}>
					Menu1
				</p>
				<p onClick={() => toPage('/menu1')} className={checkIsActive('/menu1') ? 'active' : ''}>
					Menu2
				</p>
				<p onClick={() => toPage('/menu2')} className={checkIsActive('/menu2') ? 'active' : ''}>
					Menu3
				</p>
			</div>
		</div>
	);
};
