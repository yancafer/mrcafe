import styled from 'styled-components/native';
//Adicionar background de imagem
export const Background = styled.KeyboardAvoidingView`
    flex: 1;
    flex-direction: column;
    background-color: #FAD38B;
    align-items: center;
    align-items: center;
 `;
//Modificar no código

//Modificar tamanhos
export const Logo = styled.Image`
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    width: 300px;
    height: 300px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
 `;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(88,59,63,1)'
})`
    background: rgba(255,255,255,1);
    width: 90%;
    font-size: 17px;
    color: #000;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #583B3F;
`;

export const BtnLogin = styled.TouchableOpacity`
    background-color: #583B3F;
    padding: 5px;
    border-radius: 5px;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const ImgBackground = styled.ImageBackground`
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 844px;
    flex: 1;
`;