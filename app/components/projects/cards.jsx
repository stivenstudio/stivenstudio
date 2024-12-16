import style from './projects.module.css'

export const CardWebDev = ({ title, role, description, url, cover }) => {
	return (
		<div className={style.project}>
			<img src={cover} alt={title} loading="lazy" />
			<div className={style.project_details}>
				<h2 className={style.project_details_h2}>{title}</h2>
				<span className={style.project_details_role}>{role}</span>
				<p className={style.project_details_p}>{description}</p>
				<button className='icon'>
					Web
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.04425 18.3943L6 17.35L15.8405 7.5H6.89425V6H18.3943V17.5H16.8943V8.55375L7.04425 18.3943Z" fill="white" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export const CardLogo = ({ title, tags, cover }) => {
	return (
		<div className={style.logos_details}>
			<img src={cover} alt={title} loading="lazy" />
			<div className={style.logos_details_titles}>
				<h1 className={style.logos_details_title}>{title}</h1>
				<h2 className={style.logos_details_tags}>{tags}</h2>
			</div>
		</div>
	)
}