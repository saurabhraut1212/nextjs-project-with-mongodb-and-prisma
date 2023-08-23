'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();
	const navItems = [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'About',
			href: '/about',
		},
		{
			label: 'Fag',
			href: '/about/fag',
		},
		{
			label: 'Posts',
			href: '/posts',
		},
		{
			label: 'Crud',
			href: '/crud',
		},
	];
	return (
		<div>
			{
				<ul className="flex gap-5 py-10">
					{navItems.map((item) => (
						<li key={item.id}>
							<Link
								href={item.href}
								className={
									pathname === `${item.href}` ? 'text-blue-500 font-bold' : ''
								}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			}
		</div>
	);
};

export default Header;
