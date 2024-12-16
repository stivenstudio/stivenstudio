import style from './header.module.css'

export default function Accessibility() {
	return (
		<div className={style.accessibility}>
			<button className="outline small">Dark</button>
			<button className="outline small">ES</button>
		</div>
	)
}