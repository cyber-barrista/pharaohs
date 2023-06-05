import { Camera, Euler, Vector3 } from "three"
import { HouseModelType } from "../house-model/types"
import { match } from "ts-pattern"

export type Location = {
    position: Vector3,
    rotation: Euler,
}


export function toLocation(houseModelType: HouseModelType): Location {
    return match(houseModelType)
        .with('model-e', () => ({ position: new Vector3(0, 0, 0.6), rotation: new Euler(0, Math.PI, Math.PI) }))
        .with('model-g', () => ({ position: new Vector3(0, 0.6, 0), rotation: new Euler(Math.PI / 2, 0, 0) }))
        .with('model-y', () => ({ position: new Vector3(0, 0, -0.6), rotation: new Euler(0, 0, 0) }))
        .with('model-p', () => ({ position: new Vector3(0, -0.6, 0), rotation: new Euler(Math.PI / 2, Math.PI, Math.PI) }))
        .exhaustive()
}


export function angleBetween(camera: Camera, modelLocation: Location): number {
    const direction: Vector3 = new Vector3(0, 0, 0);
    camera.getWorldDirection(direction);
    return direction.angleTo(modelLocation.position)
}
