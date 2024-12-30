import style from './header.module.css'

import Accessibility from './components/accessibility'
import Logo from './components/logo'

export default function Header() {
	return (
		<header className={style.header}>
			<Logo />
			<Accessibility />
		</header>
	)
}