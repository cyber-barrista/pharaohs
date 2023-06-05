import { match } from "ts-pattern"

export const houseModelTypes = ['model-e', 'model-g', 'model-y', 'model-p'] as const;

export type HouseModelType = typeof houseModelTypes[number];

export function toName(model: HouseModelType): string {
    return match(model)
        .with('model-e', () => "Model E")
        .with('model-g', () => "Model G")
        .with('model-y', () => "Model Y")
        .with('model-p', () => "Model P")
        .exhaustive()

}