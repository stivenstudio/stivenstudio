import style from '../header.module.css'
import ThemeToggle from './ThemeToggle'

export default function Accessibility() {

	return (
		<div className={style.accessibility}>
			<ThemeToggle />
			{/* <button className="outline small">ES</button> */}
		</div>
	)
}