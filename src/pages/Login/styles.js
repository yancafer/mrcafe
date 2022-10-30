import styled from 'styled-components/native';
//Adicionar background de imagem
export const Background = styled.View`
    flex: 1;
    background-color: #FAD38B;
 `;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
 `;

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
    font-size: 15px;
    color: #000;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 7px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const LinkText = styled.Text`
    color: #583B3F;
    font-size: 15px;
`;

export const BtnLogin = styled.TouchableOpacity`
    background-color: #583B3F;
    padding: 13px;
    border-radius: 5px;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

export const ImgBackground = styled.ImageBackground`
   flex: 1;
   justify-content: center;
   align-items: center;
   width: 500px;
   height: 900px;
   opacity: 0.35;
`;
