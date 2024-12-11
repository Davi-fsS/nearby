import { View } from "react-native"
import { router } from "expo-router"

import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
    </View>
  )
}
