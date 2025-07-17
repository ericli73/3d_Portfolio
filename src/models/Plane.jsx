import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Flying'].play();
      actions['Idle'].stop();
    } else {
      actions['Flying'].stop();
      actions['Idle'].play();
    }
  }, [actions, isRotating]);

  return (
  <mesh {...props} ref={ref}>
    <primitive object={scene} />
  </mesh>
  )
}

export default Plane