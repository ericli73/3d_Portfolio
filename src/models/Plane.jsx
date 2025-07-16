import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['dragon_flying'].play();
      actions['dragon_perch'].stop();
    } else {
      actions['dragon_flying'].stop();
      actions['dragon_perch'].play();
    }
  }, [actions, isRotating]);

  return (
  <mesh {...props} ref={ref}>
    <primitive object={scene} />
  </mesh>
  )
}

export default Plane