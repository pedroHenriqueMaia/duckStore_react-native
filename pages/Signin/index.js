import React from "react";
import Header from "../../components/Header";
import { Container, 
    KeyboardView, 
    Title, 
    Input, 
    ButtonSubmit, 
    TextButton 
} from "./styles";

function Signin() {
  return (
    <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"} >
      <Header />
      <Container>
        <Title>Login</Title>
        <Input 
        placeholder="E-mail" 
        placeholderTextColor="#595959"
        />
        <Input 
        placeholder="Senha" 
        placeholderTextColor="#595959"
        secureTextEntry
        />
        <ButtonSubmit>
            <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Signin;
