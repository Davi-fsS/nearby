import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        maxHeight: 36,
        position: "absolute",
        zIndex: 1,
        top: 64,
        gap: 8,
        paddingHorizontal: 24
    },
    content: {
        gap: 8,
        paddingHorizontal: 24,
    },
})
