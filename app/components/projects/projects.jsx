import style from "./projects.module.css";
import { CardWebDev, CardLogo } from "./cards";

export default function Projects() {
	const projects_web_dev = [
		{ title: "ERP Platform", role: "Co-founder", description: "Desarrollo de una aplicación ERP enfocada en la gestión eficiente de tiendas y negocios, incluyendo módulos clave como inventarios, ventas y administración, colaborando en equipo para su diseño y funcionalidad.", url: "", cover: "erp_platform.webp", tech: "Software" },
		{ title: "Innotech", role: "Own", description: "Desarrollo de una aplicación ERP enfocada en la gestión eficiente de tiendas y negocios, incluyendo módulos clave como inventarios, ventas y administración, colaborando en equipo para su diseño y funcionalidad.", url: "https://innotech-co.vercel.app", cover: "innotech.webp", tech: "Web" },
		{ title: "Narcos-api", role: "Own", description: "Prueba y prototipa con nuestra API falsa gratuita.", url: "https://narcos-api.vercel.app", cover: "narcos_api.webp", tech: "Web" }
	]

	const projects_logos = [
		{ title: "Copa Cauca Champions", tags: "Logo", cover: "ccc.webp" },
		{ title: "MAY", tags: "Logo", cover: "may.webp" },
		{ title: "Nogueracell", tags: "Logo", cover: "nogueracell.webp" }
	]

	return (
		<section className={style.projects}>
			{projects_web_dev.map((project) => (
				<CardWebDev
					key={project.title}
					title={project.title}
					role={project.role}
					description={project.description}
					url={project.url}
					cover={project.cover}
					tech={project.tech}
				/>
			))}

			<div className="divider"></div>

			<div className={style.grid_logos}>
				{projects_logos.map((logo) => (
					<CardLogo
						key={logo.title}
						title={logo.title}
						tags={logo.tags}
						cover={logo.cover}
					/>
				))}
			</div>

		</section>
	)
}