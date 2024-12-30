import logos from "@/app/data/logos";

import style from "./logos.module.css";
import MarkdownRenderer from "@/app/components/reactMarkdown/markdown.renderer";

export async function generateMetadata({ params }) {
	const slug = (await params).slug;
	const project = logos.find((project) => project.slug === slug);
	return {
		title: project ? project.title : "Proyecto no encontrado",
	}
}

export default async function Work({ params }) {
	const slug = (await params).slug;

	const project = logos.find((project) => project.slug === slug);

	if (!project) {
		return <h1>Proyecto no encontrado.</h1>;
	}

	return (
		<div className={style.preview_logo}>
			<div className={style.preview_image_container}>
				<img src={`../../${project.cover}`} alt={project.title} loading="lazy" />
			</div>
			<div className={style.preview_info}>
				<h1 className={style.preview_title}>{project.title}</h1>
				<p className={style.preview_description}>
					<MarkdownRenderer content={project.description} />
				</p>
			</div>
		</div>
	)
}