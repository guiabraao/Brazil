import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Trofeu(props) {

  const { nodes, materials } = useGLTF('/worldCupTrophy.glb')

  return (
    <group scale={[1, 1, 1]}{...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wctrophy_globe_low_globe_0.geometry}
        material={materials.globe}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wctrophy_body_low_body_0.geometry}
        material={materials.body}
      />
    </group>
  )
}

useGLTF.preload('/worldCupTrophy.glb')