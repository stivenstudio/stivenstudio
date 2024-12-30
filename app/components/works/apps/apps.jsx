import style from "../works.module.css";

import { CardWebDev } from "../cards"
import apps from "@/app/data/apps";

export default function Apps() {
	return (
		<div className={style.apps}>
			{apps.map((project) => (
				<div key={project.title}>
					<CardWebDev
						slug={project.slug}
						title={project.title}
						role={project.role}
						description={project.description}
						url={project.url}
						cover={project.cover}
						tech={project.tech}
					/>
				</div>
			))}
		</div>
	)
}