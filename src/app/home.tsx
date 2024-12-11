import { Alert, Text, View } from "react-native";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketsProps = PlaceProps & {
}

export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [category, setCategory] = useState<any>(null);

    const [markets, setMarkets] = useState<MarketsProps[]>([]);

    async function fetchCategories(){
        try{
            const {data} = await api.get("/categories");
            setCategories(data);
            setCategory(data[0])
        }
        catch(error){
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias")
        }
    };

    async function fetchPlaces(){
        try{
            if(!category) return;

            const {data} = await api.get("/markets/category/" + category?.id);
            setMarkets(data);
        }
        catch(error){
            console.log(error);
            Alert.alert("Locais", "Não foi possível carregar os locais")
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchPlaces();
    }, [category]);

    const handleSelectCategory = (category: any) => {
        setCategory(category);
    };

    return <View style={{flex: 1, backgroundColor: "#cecece"}}>
        <Categories data={categories} onSelect={handleSelectCategory} selected={category?.id}/>
        <Places data={markets} category={category?.name}/>
    </View>
}