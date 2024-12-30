import Link from 'next/link'
import style from './works.module.css'

export const CardWebDev = ({ slug, title, role, description, url, cover, tech }) => {
	return (
		<div className={style.item_work}>
			<div className={style.item_work_content}>
				<div className={style.item_work_title_description}>
					<div className={style.item_work_title_tag}>
						<Link href={`works/apps/${slug}`}>
							<h2 className={style.item_work_h2}>
								{title}
							</h2>
						</Link>
						<span className='tag'>{tech}</span>
					</div>
					<p className={style.item_work_p}>{description}</p>
				</div>
				<div className={style.item_work_svg}>
					<Link href={`works/apps/${slug}`}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.627 13.25H4.5V11.75H16.627L10.9308 6.05375L12 5L19.5 12.5L12 20L10.9308 18.9462L16.627 13.25Z" fill="#212121" />
						</svg>
					</Link>
				</div>
			</div>

			{/* <img src={cover} alt={title} loading="lazy" /> */}
			{/* <div className={style.project_details}>
				{
					tech == "Web" ? <a href={url} target="_blank" rel="noopener noreferrer" className='button icon'>
						{tech}
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="ffffff"><path d="M251.77-254.23 210-296l393.62-394H245.77v-60h460v460h-60v-357.85l-394 393.62Z" /></svg>
					</a> : <button>
						{tech}
					</button>
				}
			</div> */}
		</div >
	)
}

export const CardLogo = ({ slug, title, tags, cover }) => {
	return (
		<div className={style.item_work}>
			<div className={style.item_work_content}>
				<div className={style.item_work_title_description}>
					<div className={style.item_work_title_tag}>
						<Link href={`works/logos/${slug}`}>
							<h2 className={style.item_work_h2}>
								{title}
							</h2>
						</Link>
						<span className='tag'>{tags}</span>
					</div>
				</div>
				<div className={style.item_work_svg}>
					<Link href={`works/logos/${slug}`}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.627 13.25H4.5V11.75H16.627L10.9308 6.05375L12 5L19.5 12.5L12 20L10.9308 18.9462L16.627 13.25Z" fill="#212121" />
						</svg>
					</Link>
				</div>
			</div>
		</div >
	)
}