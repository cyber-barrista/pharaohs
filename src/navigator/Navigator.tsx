import { Flex, Button, Stack, Spacer } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { AppStateContext } from "../state/AppState";
import { HouseModel, toName } from "../house-model/types";

export function Navigator() {
    return (
        <Flex p={4} justify="space-around">
            <Spacer flex={1} />
            <Stack direction="row" spacing={4}>
                <HouseModelButton houseModel={"model-e"} />
                <HouseModelButton houseModel={"model-g"} />
                <HouseModelButton houseModel={"model-y"} />
                <HouseModelButton houseModel={"model-p"} />
            </Stack>
            <Spacer flex={1} />
        </Flex>
    );
}


type HouseModelButtonProps = {
    houseModel: HouseModel
}

const HouseModelButton: FC<HouseModelButtonProps> = props => {
    const { state, setState } = useContext(AppStateContext)

    const buttonText = toName(props.houseModel)
    const variant = state.currentHouseModel === props.houseModel ? "outline" : "solid" as const
    const onClick = () => setState({ currentHouseModel: props.houseModel })

    return <Button colorScheme='purple' variant={variant} onClick={onClick}>{buttonText}</Button>
}