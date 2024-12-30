import style from "../works.module.css";

import { CardLogo } from "../cards"
import logos from "@/app/data/logos";

export default function Logos() {
	return (
		<div className={style.logos} >
			{logos.map((logo) => (
				<CardLogo
					key={logo.title}
					slug={logo.slug}
					title={logo.title}
					tags={logo.tags}
					cover={logo.cover}
				/>
			))}
		</div>
	)
}