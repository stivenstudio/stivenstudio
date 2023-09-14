import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const PlanetWireframe = () => {

	const modelRef = useRef()
	const { nodes, materials } = useGLTF("/planet_wireframe.glb")

	useFrame(() => {
		const time = performance.now() * 0.00005
		modelRef.current.rotation.y = time
	})

	return (
		<group>
			<mesh
				ref={modelRef}
				castShadow
				geometry={nodes.Sphere.geometry}
				dispose={null}
				scale={1}
				rotation={[0, 0, 0]} // [x, z, y]
				position={[0, 2, 0]} // [x, z, y]
				material-color="#eeeeee"
			>
			</mesh>
		</group>
	)
}

export default PlanetWireframe