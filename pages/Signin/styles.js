import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
`;

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Title = styled.Text`
  color: #0D0D0D;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: 2px solid #262626;
  margin-bottom: 30px;
  padding: 15px 30px;
  color: #0D0D0D;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
  
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #A6A6A6;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  margin-bottom: 50px;
  align-items: center;
`;

export const TextButton = styled.Text`

`;