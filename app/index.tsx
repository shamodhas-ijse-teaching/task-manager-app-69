import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useRouter } from "expo-router"

const Index = () => {
  const router = useRouter()

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl">Hello</Text>
      <TouchableOpacity
        onPress={() => router.push("/login")}
        className="bg-blue-500 px-6 py-6"
      >
        <Text className="text-4xl">Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index
