import style from './page.module.css'

import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import Projects from '../components/projects/projects';
import Footer from '../components/footer/footer';

export default function App() {

	return <main className={style.main}>

		<Header />
		<Hero />
		<Projects />
		<Footer />

	</main>
}