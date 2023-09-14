"use client"

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";

import PlanetWireframe from "./PlanetWireframe"

function Loader() {
	return <Html center> Loading... </Html>
}

const CanvasModel = () => {

	return (
		<Canvas style={
			{
				position: 'fixed',
				top: 0, bottom: 0, left: 0, right: 0,
				zIndex: '-1'
			}
		}>
			<Suspense fallback={<Loader />}>
				{/*  */}
				<ambientLight
					intensity={5}
				/>
				{/*  */}

				{/*  */}
				{/* <OrbitControls
					enableDamping={false} // default: true | Cuando sueltas el mouse continúa girando pero disminuye la velocidad
					enablePan={false}
					enableRotate={false}
					enableZoom={false}
				/> */}
				{/*  */}

				{/*  */}
				<PerspectiveCamera
					makeDefault // Hace que esta cámara sea la cámara predeterminada
					position={[0, 1.5, .5]} // posición de la cámara [x, z, y]
					rotation={[-.7, 0, -1]} // rotación de la cámara [x, z, y]
					fov={75} // Campo de visión
					far={10} // Plano lejano
				// near={0.1} // Plano cercano
				/>

				{/*  */}
				<Center>
					<PlanetWireframe />
				</Center>
				{/*  */}
				
				{/*  */}
				{/* <axesHelper args={[2]} />
				<gridHelper args={[3]} /> */}
				{/*  */}
			</Suspense>
		</Canvas>
	)
}

export default CanvasModel