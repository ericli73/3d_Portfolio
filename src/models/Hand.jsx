import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import handModel from '../assets/3d/hand.glb';

const Hand = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene } = useGLTF(handModel);

  // ❗ Ensure scene is loaded and only render when not rotating
  if (isRotating || !scene) return null;

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Hand;
