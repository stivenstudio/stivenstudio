import style from "./projects.module.css";
import { CardWebDev, CardLogo } from "./cards";

export default function Projects() {
	const projects_web_dev = [
		{ title: "ERP Platform", role: "Co-founder", description: "Desarrollo de una aplicación ERP enfocada en la gestión eficiente de tiendas y negocios, incluyendo módulos clave como inventarios, ventas y administración, colaborando en equipo para su diseño y funcionalidad.", url: "", cover: "erp_platform.webp" },
		{ title: "Innotech", role: "Co-founder", description: "Desarrollo de una aplicación ERP enfocada en la gestión eficiente de tiendas y negocios, incluyendo módulos clave como inventarios, ventas y administración, colaborando en equipo para su diseño y funcionalidad.", url: "", cover: "innotech.webp" },
		{ title: "Narcos-api", role: "Co-founder", description: "Prueba y prototipa con nuestra API falsa gratuita.", url: "", cover: "narcos_api.webp" }
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