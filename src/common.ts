import equal from "fast-deep-equal";
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useEffectWhenChanged(effect: EffectCallback, deps?: DependencyList) {
    const isFirstRender = useRef(true);
    const prevDependencies = useRef(deps);

    useEffect(() => {
        if (isFirstRender.current) {
            effect()
            isFirstRender.current = false;
        } else {
            if (!equal(prevDependencies.current, deps)) {
                effect();
            }
        }

        prevDependencies.current = deps;
    }, deps);
};
