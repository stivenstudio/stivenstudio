import style from "./page.module.css";

import { ButtonReturn } from "@/app/components/buttons/button_return";

import img1 from '@/public/digital_art_1.webp'
import img2 from '@/public/digital_art_2.webp'
import img3 from '@/public/digital_art_3.webp'
import Link from "next/link";

export const metadata = {
	title: 'Works'
};

export default function page() {

	return <main className={style.main}>
		<section>
			<h1>WORKS</h1>
		</section>

		{/* my projects */}
		<section>
			<h1 style={{ marginBottom: '2em' }}>My Projects</h1>
			<ul style={{ gap: '2em' }}>
				<li>
					<p style={{ marginBottom: '1em' }}>
						<a href="https://narcos-api.vercel.app" target="_bank">↗ NARCOS API</a> — <i>Colombia</i></p>
					<b style={{ opacity: '.5' }}>Creator</b>
				</li>
				<li>
					<p style={{ marginBottom: '1em' }}>↗ My Fonts — <i>Colombia</i></p>
					<b style={{ opacity: '.5' }}>Creator</b>
				</li>
			</ul>
		</section>

		{/* dev projects */}
		<section>
			<h1 style={{ marginBottom: '2em' }}>Dev Projects</h1>
			<ul style={{ gap: '2em' }}>
				<li>
					<p style={{ marginBottom: '1em' }}>Ukawexs Nasa Cxhab — <i>Colombia</i></p>
					<b style={{ opacity: '.5' }}>App Web</b>
				</li>
				<li>
					<p style={{ marginBottom: '1em' }}>Inventory Compute — <i>Colombia</i></p>
					<b style={{ opacity: '.5' }}>Software</b>
				</li>
			</ul>
		</section>

		{/* design projects */}
		<section>
			<h1 style={{ marginBottom: '2em' }}>Design Projects</h1>
			<ul style={{ gap: '2em' }}>
				<li>
					<p style={{ marginBottom: '1em' }}>Karen Rojas Cortes — <i>Cali, Colombia</i></p>
					<b style={{ opacity: '.5' }}>Isotipo</b>
				</li>
				<li>
					<p style={{ marginBottom: '1em' }}>
						<a href="https://zuragroup.netlify.app" target="_bank">↗ Zura Group</a> — <i>Colombia</i>
					</p>
					<b style={{ opacity: '.5' }}>Web Design</b>
				</li>
			</ul>
		</section>

		{/* digital art */}
		<section>
			<h1>DIGITAL ART</h1>
		</section>
		<section className={style.digital_art}>
			<img src={img1.src} loading="lazy" alt="Digital Art 1" className={style.img} />
		</section>
		<section className={style.digital_art}>
			<img src={img2.src} loading="lazy" alt="Digital Art 2" className={style.img} />
		</section>
		<section className={style.digital_art}>
			<img src={img3.src} loading="lazy" alt="Digital Art 3" className={style.img} />
		</section>
		<div style={{ display: 'flex', alignItems: 'flex-end' }}>
			<Link href="/" className="btn-outline">
				<b>RETURN</b>
			</Link>
			{/* <ButtonReturn text={"← RETURN"} /> */}
		</div>
	</main>
}