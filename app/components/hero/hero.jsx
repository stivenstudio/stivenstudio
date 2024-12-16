import style from "./hero.module.css";
import CanvasThreeModel from "../canvas/CanvasThreeModel";

export default function Hero() {
	return (
		<section className={style.hero}>
			<div className={style.hero_content}>
				<div className={style.hero_content_titles}>
					<h1 className={style.hero_content_h1}>Transformamos ideas en experiencias digitales.</h1>
					<p className={style.hero_content_p}>Desarrollador web y diseñador gráfico, creando experiencias digitales y visuales únicas.</p>
				</div>
				<a href="mailto:stivenstudiodigital@gmail.com" className="button">Contáctame</a>
			</div>
			<div className={style.hero_content_3d}>
				<CanvasThreeModel modelPath={'/stivenstudio-3d.glb'} />
			</div>
		</section>
	)
}