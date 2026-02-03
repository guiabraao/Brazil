import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Trofeu from './Trofeu.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Scene() {
    

    return (
        <>

            <PerspectiveCamera
                makeDefault
                position={[0, 0, 19.1]}
                fov={35}
                near={0.01}
                far={1000}
            />

            <ambientLight intensity={0.1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="sunset" />
            <Trofeu />

        </>
    )
}