import Link from 'next/link'
import style from './projects.module.css'

export const CardWebDev = ({ title, role, description, url, cover, tech }) => {
	return (
		<div className={style.project}>
			<img src={cover} alt={title} loading="lazy" />
			<div className={style.project_details}>
				<h2 className={style.project_details_h2}>{title}</h2>
				<span className={style.project_details_role}>{role}</span>
				<p className={style.project_details_p}>{description}</p>
				{
					tech == "Web" ? <a href={url} target="_blank" rel="noopener noreferrer" className='button icon'>
						{tech}
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="ffffff"><path d="M251.77-254.23 210-296l393.62-394H245.77v-60h460v460h-60v-357.85l-394 393.62Z" /></svg>
					</a> : <button>
						{tech}
					</button>
				}
			</div>
		</div>
	)
}

export const CardLogo = ({ title, tags, cover }) => {
	return (
		<Link href="#">
			<div className={style.logos_details}>
				<div className={style.logos_details_cover}>
					<img src={cover} alt={title} loading="lazy" className={style.logos_details_cover_img} />
				</div>
				<div className={style.logos_details_titles}>
					<h1 className={style.logos_details_title}>{title}</h1>
					<h2 className={style.logos_details_tags}>{tags}</h2>
				</div>
			</div>
		</Link>
	)
}