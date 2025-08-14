import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable
} from "react-native"
import React from "react"
import { useRouter } from "expo-router"

const Register = () => {
  const router = useRouter()

  return (
    <View className="flex-1 bg-gray-100 justify-center p-4">
      <Text className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Register
      </Text>
      <TextInput
        placeholder="Email"
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-900"
        placeholderTextColor="#9CA3AF"
      />
      <TextInput
        placeholder="Password"
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-900"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
      />
      <TouchableOpacity className="bg-green-600 p-4 rounded mt-2">
        <Text className="text-center text-2xl text-white">Register</Text>
      </TouchableOpacity>
      <Pressable onPress={() => router.back()}>
        <Text className="text-center text-blue-500 text-xl">
          Alredy have an account? Login
        </Text>
      </Pressable>
    </View>
  )
}

export default Register
