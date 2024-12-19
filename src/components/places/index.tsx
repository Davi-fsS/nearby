import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet";

import { Place, PlaceProps } from "../place";
import { s } from "./styles";
import { router } from "expo-router";

type Props = {
    data : PlaceProps[]
    category: string
}

export function Places({ data, category }: Props){
    const dimensions = useWindowDimensions();
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = {
        min: 278,
        max: dimensions.height - 200,
    };

    return <BottomSheet 
        ref={bottomSheetRef}
        snapPoints={[snapPoints.min, snapPoints.max]}
        handleIndicatorStyle={s.indicator}
        backgroundStyle={s.container}
        enableOverDrag={false}
        >
        <BottomSheetFlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Place data={item} onPress={() => router.navigate(`/market/${item.id}`)}/>}
            contentContainerStyle={s.content}
            ListHeaderComponent={() => <Text style={s.title}>{category}</Text>}
            showsVerticalScrollIndicator={false}
        />
    </BottomSheet>
}