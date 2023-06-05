import { useThree } from "@react-three/fiber"
import { useContext, useEffect } from "react"
import { AppStateContext } from "../state/AppState"
import { angleBetween, toLocation } from "./common"
import { useEffectWhenChanged } from "../common"

export function ScrollHandler() {
    const { camera } = useThree()
    const { state, setState } = useContext(AppStateContext)

    const handleScrolls = (e: WheelEvent) => camera.rotateX(-e.deltaY / 1000000)
    useEffect(() => window.addEventListener('wheel', handleScrolls))

    useEffectWhenChanged(() => {
        const currentModelLocation = toLocation(state.currentHouseModel)
        const angle = angleBetween(camera, currentModelLocation)

        if (Math.abs(angle) > Math.PI / 7) {
            const newRotation = currentModelLocation.rotation
            camera.rotation.set(newRotation.x, newRotation.y, newRotation.z)
        }
    }, [state])

    return <></>
}

