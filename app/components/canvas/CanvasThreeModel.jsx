"use client"

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html, Environment, useGLTF } from "@react-three/drei";

const Model = ({ path }) => {
	const { scene } = useGLTF(path)
	const ref = useRef()

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.01
		}
	})

	scene.traverse((child) => {
		if (child.isMesh) {
			child.material.envMapIntensity = 1;
			child.material.roughness = 0.1;
			child.material.metalness = 1;
		}
	})

	return <primitive ref={ref} object={scene} position={[0, 0, 0]} />
}

function Loader() {
	return <Html center> Loading... </Html>
}

const CanvasThreeModel = ({ modelPath }) => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			{/* <directionalLight position={[10, 10, 5]} intensity={1} />
			<directionalLight position={[-10, -10, -5]} intensity={1} /> */}
			<Suspense fallback={<Loader />}>
				{/* <OrbitControls
					enableDamping={true} // default: true | Cuando sueltas el mouse continúa girando pero disminuye la velocidad
					enablePan={true}
					enableRotate={true}
					enableZoom={true}
				/> */}
				<PerspectiveCamera
					makeDefault // Hace que esta cámara sea la cámara predeterminada
					position={[0, 0, 5]} // posición de la cámara [x, z, y]
					rotation={[0, 0, 0]} // rotación de la cámara [x, z, y]
					fov={70} // Campo de visión
					far={10} // Plano lejano
				/>
				<Model path={modelPath} />
				<Environment preset="sunset" />
			</Suspense>
		</Canvas>
	);
}

export default CanvasThreeModel