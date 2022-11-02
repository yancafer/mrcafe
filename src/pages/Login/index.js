import React, { useState } from 'react';
import {
  AreaInput, Background,
  BtnLogin,
  Container,
  Input,
  SubmitText,
  Link,
  LinkText,
  Logo,
  TouchableOpacity
} from './styles';
import {Feather} from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            value={email}
            oneChangeText={value => setEmail(value)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            value={password}
            oneChangeText={value => setPassword(value)}
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