import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import logo from '../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>DIGITE SEU EMAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.label}>DIGITE SUA SENHA *</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha "
          placeholderTextColor="#999"
          keyboardType="visible-password"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 2,
    alignSelf: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
  },

  button: {
    height: 42,
    backgroundColor: '#ff9732',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 50,
    width: 300,
  },

  buttonText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
