import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { HouseModelType } from "../house-model/types";
import { angleBetween, toLocation } from "./common";
import { useContext } from "react";
import { AppStateContext } from "../state/AppState";
import { TextureLoader } from "three";

export type HouseModelProps = {
    houseModel: HouseModelType
}


export function HouseModel(props: HouseModelProps) {
    const meshLocation = toLocation(props.houseModel)
    const { camera } = useThree();
    const { state, setState } = useContext(AppStateContext)

    useFrame(() => {
        const angle = angleBetween(camera, meshLocation)
        if (Math.abs(angle) < Math.PI / 7) {
            setState({ currentHouseModel: props.houseModel })
        }
    })

    return (
        <mesh {...meshLocation}>
            <planeGeometry />
            <meshBasicMaterial attach="material" map={useLoader(TextureLoader, `/scene/models/${props.houseModel}.jpg`)} />
        </mesh>
    )
}
