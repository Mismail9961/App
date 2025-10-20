import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabsLayout() {
  return <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" ,
    tabBarIcon: ({focused}) => {
      return focused ? (
        <Entypo name="home" size={24} color="black" />
      ) : ( <AntDesign name="home" size={24} color="black" /> )
    } }} />
    <Tabs.Screen name="login" options={{
      title: "Login", tabBarIcon: () => (
        <Entypo name="login" size={24} color="black" />
      )
    }} />

  </Tabs>;
}
