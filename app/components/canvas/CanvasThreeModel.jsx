"use client"

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html, Environment, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ path }) => {
	const { scene } = useLoader(GLTFLoader, path)
	// const { scene } = useGLTF(path)
	const ref = useRef()

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.001
		}
	})

	scene.traverse((child) => {
		if (child.isMesh) {
			child.material.envMapIntensity = 1;
			child.material.roughness = 0.1;
			child.material.metalness = 1;
		}
	})

	return <primitive ref={ref} object={scene} position={[0, 0, 3.5]} />
}

function Loader() {
	return <Html center> Loading... </Html>
}

const CanvasThreeModel = ({ modelPath }) => {

	const [startLoding, setStartLoding] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => { setStartLoding(true) }, 1000) // Retraso de 1 segundo
		return () => clearTimeout(timer) // limpiar el temporizador
	}, [])

	return (
		<Canvas>
			<Suspense fallback={<Loader />}>
				{startLoding ? (
					<>
						<ambientLight intensity={0.5} />
						{/* <directionalLight position={[10, 10, 5]} intensity={1} />
				<directionalLight position={[-10, -10, -5]} intensity={1} /> */}
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
					</>
				) : null}
			</Suspense>
		</Canvas>
	);
}

export default CanvasThreeModel