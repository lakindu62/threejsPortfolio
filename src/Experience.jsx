import { Environment, Float, PresentationControls, useGLTF, ContactShadows, Html, Text } from '@react-three/drei'

export default function Experience() {

    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    console.log(computer);

    return <>

        <Environment preset='city' />
        <color args={['grey']} attach="background" />




        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float
                rotationIntensity={0.4}
            >

                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={5}
                    color={'blue'}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <primitive
                    object={computer.scene}
                    position-y={-1.2}
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <iframe src="https://lakindu-rathmanagolla.netlify.app/" frameborder="0"></iframe>
                    </Html>
                </primitive>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={0.7}
                    position={[2, 0.75, 0.75]}
                    rotation-y={-1.25}
                    children={'Lakindu\r Rathmanagolla'}
                    textAlign='center'
                ></Text>
            </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />

    </>
}