import style from './header.module.css'

import Accessibility from './accessibility'
import Logo from './logo'

export default function Header() {
	return (
		<header className={style.header}>
			<Logo />
			<Accessibility />
		</header>
	)
}