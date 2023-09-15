import style from "./page.module.css";

import { ButtonReturn } from "@/app/components/buttons/button_return";

import img1 from '@/public/digital_art_1.webp'
import img2 from '@/public/digital_art_2.webp'
import img3 from '@/public/digital_art_3.webp'
import Link from "next/link";

export const metadata = {
	title: 'WORKS'
};

export default function page() {

	return <main className={style.main}>
		<section>
			<h1>WORKS</h1>
		</section>
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
		<section>
			<h1>DIGITAL ART</h1>
		</section>
		<section style={{ overflow: 'hidden', minHeight: '100px', borderRadius: "1rem" }}>
			<img src={img1.src} loading="lazy" alt="Digital Art 1" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} className={style.img} />
			{/* <section style={{ overflow: 'hidden', minHeight: '100px' }}>
                <Image priority src={img3} alt="Digital Art 3" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} className={style.img} />
            </section> */}
		</section>
		<section style={{ overflow: 'hidden', minHeight: '100px', borderRadius: "1rem" }}>
			<img src={img2.src} loading="lazy" alt="Digital Art 2" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} className={style.img} />
		</section>
		<section style={{ overflow: 'hidden', minHeight: '100px', borderRadius: "1rem" }}>
			<img src={img3.src} loading="lazy" alt="Digital Art 3" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} className={style.img} />
		</section>
		<div style={{ display: 'flex', alignItems: 'flex-end' }}>
			<Link href="/" className="btn-outline">
				RETURN
			</Link>
			{/* <ButtonReturn text={"← RETURN"} /> */}
		</div>
	</main>


	// <main className={style.main}>
	//     <ButtonReturn text={"← RETURN"} />
	//     <ul className={style.ul__main}>
	//         <li className={style.li__ul__main}>
	//             <h1>ABOUT</h1>
	//             <p>Hello! I'm Steven Castro, a passionate web developer from Popayan, Colombia. My goal is to create engaging and easy-to-use online experiences. Always in search of excellence and committed to learning and growing in the world of web development. Ready to turn ideas into digital reality!</p>
	//         </li>
	//         <li className={style.li__ul__main}>
	//             <h1>NICHE</h1>
	//             <ul>
	//                 <li>Digital Art</li>
	//                 <li>Web Design</li>
	//                 <li>Front-end Development</li>
	//             </ul>
	//         </li>
	//         <li className={style.li__ul__main}>
	//             <h1>SOCIAL</h1>
	//             <ul>
	//                 <li>
	//                     <a href='https://www.instagram.com/stiven.studio' target='_blank'>Instagram ↗</a>
	//                 </li>
	//                 <li>
	//                     <a href='https://github.com/stivenstudio' target='_blank'>Github ↗</a>
	//                 </li>
	//                 <li>
	//                     <a href='https://www.behance.net/stivenstudio' target='_blank'>Behance ↗</a>
	//                 </li>
	//             </ul>
	//         </li>
	//     </ul>
	// </main>
}