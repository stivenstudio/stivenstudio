import Link from 'next/link'

import style from './page.module.css'

import { TimeLocal } from "../components/time_local";

export default function App() {

	return <main className={style.main}>

		<header className={style.header}>

			<a href="/">
				<svg style={{ width: "auto", height: "2em" }} viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path d="M61.6 12H54.7555C54.7555 11.04 53.2156 10.2856 51.3335 10.2856H6.84451C4.82548 10.2856 3.01163 9.63389 1.77947 8.57111C1.16339 8.09111 0.684284 7.50778 0.410349 6.85667C0.136968 6.30833 0 5.76 0 5.14278C0 4.52556 0.136968 3.97722 0.410903 3.42833C1.33474 1.44 3.86726 0 6.84451 0H23.9555C26.9327 0 29.4653 1.44 30.4235 3.42833C30.663 3.97667 30.8 4.52556 30.8 5.14278H23.9555C23.9555 4.18278 22.4156 3.42833 20.5335 3.42833H10.2665C8.38442 3.42833 6.84451 4.18278 6.84451 5.14278C6.84451 6.10278 8.38442 6.85722 10.2665 6.85722H54.7555C58.5196 6.85722 61.6 9.15444 61.6 12Z" fill="#212121" />
						<path d="M61.6 18.8572C61.6 19.4744 61.463 20.0228 61.2235 20.5717C60.2653 22.56 57.7327 24 54.7555 24H37.6445C34.6673 24 32.1347 22.56 31.2109 20.5717C30.937 20.0228 30.8 19.4744 30.8 18.8572H37.6445C37.6445 19.8172 39.1844 20.5717 41.0665 20.5717H51.333C53.215 20.5717 54.7549 19.8172 54.7549 18.8572C54.7549 17.8972 53.215 17.1428 51.333 17.1428H6.84451C3.07983 17.1428 0 14.8456 0 12H6.84451C6.84451 12.96 8.38442 13.7144 10.2665 13.7144H54.7555C56.7745 13.7144 58.5884 14.3656 59.8205 15.4289C60.4366 15.9089 60.9157 16.4917 61.2235 17.1433C61.463 17.6917 61.6 18.2406 61.6 18.8578V18.8572Z" fill="#212121" />
					</g>
					<defs>
						<clipPath id="clip0_1108_140">
							<rect width="61.6" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</a>

			<nav>
				<ul>
					<li>
						<Link href="works">
							<b>WORKS</b>
						</Link>
					</li>
				</ul>
			</nav>

		</header>

		<footer className={style.footer}>
			<section style={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
				<ul>
					<h6>STIVEN STUDIO</h6>
					<li>Digital Art</li>
					<li>Web Design</li>
					<li>Front-end Development</li>
				</ul>
				<section>
					<p>I'm stiven castro and I'm from Colombia.</p>
					<p>A guy who is passionate about designing and developing websites.</p>
					<p>I am always looking for new challenges and opportunities to grow and improve.</p>
				</section>
			</section>

			<section className={style.footer__section__social}>

				<section>
					<p>Email:</p>
					<a href='mailto:stivenstudiodigital@gmail.com' target='_blank'><b>stivenstudiodigital@gmail.com ↗</b></a>
				</section>

				<section>
					<p>Social:</p>
					<ul style={{ display: "inherit", flexDirection: "row", gap: "1em" }}>
						<li>
							<a href='https://www.instagram.com/stiven.studio' target='_blank'><b>IG ↗</b></a>
						</li>
						<li>
							<a href='https://github.com/stivenstudio' target='_blank'><b>GB ↗</b></a>
						</li>
						<li>
							<a href='https://www.behance.net/stivenstudio' target='_blank'><b>BE ↗</b></a>
						</li>
					</ul>
				</section>

			</section>

			<section className={style.footer__section__location}>
				<b suppressHydrationWarning={true} ><TimeLocal /></b>
				<p>Popayán, Cauca - Colombia</p>
			</section>

			<section className={style.footer__section__year}>
				<b>© {new Date().getFullYear()}</b>
			</section>

		</footer>

	</main>
}