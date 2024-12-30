import style from "../hero.module.css";

export default function HeroContent() {
	return <div className={style.hero_content}>
		<div className={style.hero_content_titles}>
			<h1 className={style.hero_content_h1}>Transformamos ideas en experiencias digitales.</h1>
			<p className={style.hero_content_p}>Desarrollador web y diseñador gráfico, creando experiencias digitales y visuales únicas.</p>
		</div>
		<a href="mailto:stivenstudiodigital@gmail.com" className="button">Contáctame</a>
	</div>
}