import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView,ImageBackground , Image, TextInput, TouchableOpacity } from 'react-native';
import {AreaInput, Background,
  BtnLogin,
  Input,
  ImgBackground,
  SubmitText,
  Link,
  LinkText,
  Logo} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    
    <Background>
      <ImgBackground
      source={require('../../assets/background.png')}
      />
      <StatusBar backgroundColor="#000" barStyle="light-content" />

        <Logo
          source={require('../../assets/mrcafe-logo.png')}
        />
        <AreaInput>
        <Input
          placeholder='E-mail'
        />
        </AreaInput>

        <AreaInput>
        <Input
          placeholder='Senha'
        />
        </AreaInput>

        <BtnLogin>
          <SubmitText>Acessar</SubmitText>
        </BtnLogin>

        <Link>
          <LinkText>Não possui conta ainda? Criar conta!</LinkText>
          <LinkText>Sign up</LinkText>
        </Link>

 
    </Background>
  )
}