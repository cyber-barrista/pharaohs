import { match } from "ts-pattern"

export type HouseModel = 'model-e' | 'model-g' | 'model-y' | 'model-p'

export function toName(model: HouseModel): string {
    return match(model)
        .with('model-e', () => "Model E")
        .with('model-g', () => "Model G")
        .with('model-y', () => "Model Y")
        .with('model-p', () => "Model P")
        .exhaustive()

}