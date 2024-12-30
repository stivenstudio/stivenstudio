import MarkdownRenderer from "@/app/components/reactMarkdown/markdown.renderer";

import style from "./page.module.css";

export const metadata = {
	title: 'Aviso Legal'
};

export default function page() {
	return (
		<main className={style.main}>

			<section className={style.section_legal_notice}>

				<article className={style.legal_notice}>
					<h1>Aviso Legal y Condiciones de Uso</h1>
					<p>
						<MarkdownRenderer content={
							"Este documento regula el uso del sitio web perteneciente a **Stiven Studio**, estableciendo los derechos y responsabilidades de los usuarios y del titular en relación al contenido presentado en el portafolio."
						} />
					</p>
				</article>

				<div className="divider"></div>

				<ol>
					<li>
						<b>1. Titularidad y Propiedad Intelectual del Sitio Web</b>
						<p>
							<MarkdownRenderer content={
								"El sitio web, denominado **[Stiven Studio](https://stivenstudio.vercel.app)**, es propiedad exclusiva de *Stiven Castro*. Todo el contenido alojado en el Sitio, incluidos, pero no limitados a diseños, logotipos, imágenes, textos, código fuente y cualquier otro material creativo, está protegido por las leyes internacionales de derechos de autor."
							} />
						</p>
					</li>
					<li>
						<b>2. Derechos de Autor y Uso del Contenido</b>
						<p>Todos los derechos sobre los contenidos del Sitio pertenecen exclusivamente a Stiven Castro, salvo indicación contraria. Está estrictamente prohibido copiar, reproducir, modificar, distribuir, publicar o utilizar el contenido sin previa autorización escrita del titular.</p>
						<p><b>Excepción:</b> Los logotipos y diseños desarrollados para clientes que se muestran en este portafolio tienen un propósito ilustrativo para demostrar las capacidades del autor. Dichos materiales pueden estar protegidos por derechos de autor o marcas registradas pertenecie</p>
					</li>
					<li>
						<b>3. Navegación y Uso Permitido del Sitio</b>
						<p>El acceso al Sitio no otorga al usuario ningún derecho de propiedad sobre los contenidos. Está permitido:</p>
						<ul style={{ "marginLeft": "16px" }}>
							<li>• Navegar por el Sitio.</li>
							<li>• Compartir enlaces al Sitio en redes sociales o plataformas similares, siempre que se reconozca a Stiven Castro como creador del contenido.</li>
						</ul>
						<p>Cualquier otro uso estará sujeto a autorización previa.</p>
					</li>
					<li>
						<b>4. Licencia y Restricciones para Páginas Web</b>
						<p>Las páginas web incluidas en el portafolio son creaciones originales y propiedad intelectual de Stiven Castro. Queda prohibida su reproducción, modificación o uso sin el consentimiento del autor. El incumplimiento de esta norma será considerado una infracción a los derechos de autor y podrá dar lugar a acciones legales.</p>
					</li>
					<li>
						<b>5. Limitación de Responsabilidad</b>
						<p>Stiven Castro no se hace responsable por:</p>
						<ul style={{ "marginLeft": "16px" }}>
							<li>• El uso indebido que terceros puedan hacer del contenido del Sitio.</li>
							<li>• Errores, omisiones o inexactitudes en la información presentada.</li>
							<li>• Daños o perjuicios derivados del acceso o uso del Sitio.</li>
						</ul>
						<p>Si detectas algún uso no autorizado del contenido, se solicita que lo informes a través del correo electrónico proporcionado.</p>
					</li>
					<li>
						<b>6. Modificaciones a las Condiciones</b>
						<p>Stiven Castro se reserva el derecho de actualizar este Aviso Legal y las Condiciones de Uso en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en el Sitio.</p>
					</li>
					<li>
						<b>7. Contacto para Consultas y Notificaciones</b>
						<p>Para consultas, comentarios o solicitudes de autorización relacionadas con este Aviso Legal, puedes contactarme a través de los siguientes medios:</p>
						<ul style={{ "marginLeft": "16px" }}>
							<li>• Email: stivenstudiodigital@gmail.com</li>
							<li>• Celular: +57 315 446 9158</li>
						</ul>
					</li>
					<li>
						<b>8. Jurisdicción y Legislación Aplicable</b>
						<p>Este Aviso Legal se rige por las leyes vigentes en Colombia. Cualquier controversia derivada del uso del Sitio o sus contenidos se someterá a la jurisdicción de los tribunales competentes en Colombia.</p>
					</li>
				</ol>

			</section>
		</main >
	)
}