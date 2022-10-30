import React, { useState } from 'react';
import { StatusBar, View, StyleSheet, ImageBackground } from 'react-native';
import {
  AreaInput, Background,
  BtnLogin,
  Container,
  Input,
  ImgBackground,
  SubmitText,
  Link,
  LinkText,
  Logo
} from './styles';

export default function SignIn() {

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
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
        </Link>

      </Container>
    </Background>
  );
}