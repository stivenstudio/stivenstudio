import style from "./hero.module.css";
import CanvasThreeModel from "../canvas/CanvasThreeModel";
import HeroContent from "./components/hero_content";

export default function Hero() {
	
	return (
		<section className={style.hero}>
			<HeroContent />
			<div className={style.hero_content_3d}>
				<CanvasThreeModel modelPath={'/stivenstudio-3d.glb'} />
			</div>
		</section>
	)
}