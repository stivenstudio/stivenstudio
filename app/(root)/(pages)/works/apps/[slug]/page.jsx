import apps from "@/app/data/apps";

import style from "./apps.module.css";

export async function generateMetadata({ params }) {
	const slug = (await params).slug;
	const project = apps.find((project) => project.slug === slug);
	return {
		title: project ? project.title : "Proyecto no encontrado",
	}
}

export default async function AppDetail({ params }) {

	const slug = (await params).slug;

	const project = apps.find((project) => project.slug === slug);

	if (!project) {
		return <h1>Proyecto no encontrado.</h1>;
	}

	return (
		<div className={style.item_work_app}>
			<div className={style.item_work_title_description}>
				<div className={style.item_work_title_tag_button}>
					<div className={style.item_work_title_tag}>
						<h1 className={style.item_work_h2}>{project.title}</h1>
						<span className='tag'>{project.tech}</span>
					</div>
					{
						project.url && <a href={project.url} className='button icon' target="_blank" rel="noopener noreferrer">
							Visitar
							<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.65021 12.6971L0.605957 11.6529L10.4465 1.80289H1.50021V0.302887H13.0002V11.8029H11.5002V2.85664L1.65021 12.6971Z" fill="white" />
							</svg>
						</a>
					}

				</div>
				<p className={style.item_work_p}>{project.description}</p>
			</div>

			{project.cover && <img src={`../../${project.cover}`} alt={project.title} loading="lazy" />}

		</div>
	)
}