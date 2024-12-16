import Link from "next/link";

import style from "./footer.module.css";

export default function Footer() {
	return (
		<footer>
			<div className={style.footer_contact}>
				<div className="divider"></div>
				<div className={style.footer_email}>
					<p className={style.footer_p}>¡Hablemos sobre tu próximo proyecto!</p>
					<a href="mailto:stivenstudiodigital@gmail.com" className="button">stivenstudiodigital@gmail.com</a>
				</div>
				<div className="divider"></div>
			</div>
			<div className={style.footer_social}>
				<div className={style.footer_copyright}>
					<span>© 2024 stivenstudio.</span>
					<span>—</span>
					<span>All Rights Reserved.</span>
					<span>|</span>
					<Link href="legal-notice">Aviso Legal</Link>
				</div>
				<div className={style.social}>
					<a href="https://github.com/stivenstudio" target="_blank" rel="noopener noreferrer">Github</a>
					<a href="https://www.instagram.com/stiven.studio" target="_blank" rel="noopener noreferrer">Instagram</a>
				</div>
			</div>
		</footer>
	)
}