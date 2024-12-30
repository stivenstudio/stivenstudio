import style from "./page.module.css";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function Layout({ children }) {
	return (
		<main className={style.main}>
			<div className={style.bg}></div>
			<Header />
			{children}
			<Footer />
		</main>
	)
}