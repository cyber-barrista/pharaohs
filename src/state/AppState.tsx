import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { HouseModel } from '../house-model/types';


export type AppState = {
    currentHouseModel: HouseModel
}

const defaultAppState: AppState = {
    currentHouseModel: 'model-e'
}

export type AppStateAccessors = {
    state: AppState
    setState: Dispatch<SetStateAction<AppState>>
}

const defaultAppStateAccessors: AppStateAccessors = {
    state: defaultAppState,
    setState: (_) => { console.warn("Default app state setter is not supposed to be called") }
}

export const AppStateContext = createContext(defaultAppStateAccessors);

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState(defaultAppState);

    return <AppStateContext.Provider value={{ state, setState }}>
        {children}
    </AppStateContext.Provider>
};
