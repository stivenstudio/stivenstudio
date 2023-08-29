import Link from "next/link";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem'

}

export default function NotFound() {
	return <section style={style}>
		<h1>404</h1>
		<p>Page Not Found</p>
		<Link href="/">← RETURN</Link>
	</section>
	
}