import { StatusBar } from 'expo-status-bar'
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Linking,
} from 'react-native'

const githubBackgroundColor = '#181818'
const githubPrimaryFontColor = '#C9D1D9'
const githubSecondaryFontColor = '#4F565E'
const githubAvatarBorderColor = '#808080'

const githubAvatar = 'https://github.com/fabiodelllima.png'
const githubUrl = 'https://github.com/fabiodelllima'

const App = () => {
  const handlePress = async () => {
    const res = await Linking.canOpenURL(githubUrl)
    if (res) {
      await Linking.openURL(githubUrl)
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={githubBackgroundColor}
        barStyle='light-content'
      />
      <View style={style.content}>
        <Image
          accessibilityLabel='Avatar de Fábio'
          style={style.avatar}
          source={{ uri: githubAvatar }}
        />
        <Text
          accessibilityLabel='Nome: Fábio de Lima'
          style={[style.defaultText, style.name]}
        >
          Fábio de Lima
        </Text>
        <Text
          accessibilityLabel='Username: fabiodelllima'
          style={[style.defaultText, style.username]}
        >
          fabiodelllima
        </Text>
        <Pressable onPress={handlePress}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Visualizar no Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    backgroundColor: githubBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  defaultText: {
    color: githubPrimaryFontColor,
  },
  avatar: {
    borderColor: githubAvatarBorderColor,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 0.5,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 24,
  },
  username: {
    color: githubSecondaryFontColor,
    fontSize: 18,
    marginTop: -7,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: githubSecondaryFontColor,
    marginTop: 12,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})
