import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Login extends Component {
  state = {
    username: ''
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const username = await AsyncStorage.getItem('@game:username:username');

    if (username) {
      navigation.navigate('Game');
    }
  }

  handleInputChange = username => {
    this.setState({ username });
  };

  handleSubmit = async () => {
    const { navigation } = this.props;
    const { username } = this.state;

    if (!username.length) return;
    await AsyncStorage.setItem('@game:username', username);
    navigation.navigate('Game');
  };

  render() {
    const { username } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <View>
            <Icon name="brain" size={64} color="#4BB0EE" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            value={username}
            returnKeyType="send"
            onChangeText={this.handleInputChange}
            onSubmitEditing={this.handleSubmit}
          />
          <TouchableOpacity
            onPress={() => {
              this.handleSubmit();
            }}
            style={styles.button}
          >
            <Text>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    marginTop: 45
  },
  button: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#4BB0EE',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
