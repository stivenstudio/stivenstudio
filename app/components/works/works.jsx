import style from "./works.module.css";

import Apps from "./apps/apps";
import Logos from "./logos/logos";

export default function Projects() {
	return (
		<section className={style.works}>
			<Apps />
			<Logos />
		</section>
	)
}