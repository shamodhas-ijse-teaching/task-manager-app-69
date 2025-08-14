import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import { getTasks } from "@/services/taskService"

const TaskScreen = () => {
  const [tasks, setTasks] = useState([])

  const handleFetchData = async () => {
    await getTasks()
      .then((data) => {
        console.log(data)
        setTasks(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <View className="flex-1 justify-center align-items-center">
      <Text className="text-4xl">Task Screen</Text>
    </View>
  )
}

export default TaskScreen
