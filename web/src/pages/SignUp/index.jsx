import { Container } from "./styles"
import astro from "../../assets/signUp.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
export function SignUp() {
  return (
    <Container>
      <div className="wrapperImg">
        <img src={astro} />
      </div>
      <div className="wrapperForm">
        <form>
          <header>
            <p>CADASTRO</p>
            <a href="">ENTRAR</a>
          </header>
          <Input title="NOME DE USUÁRIO" />
          <Input title="EMAIL" />
          <Input title="SENHA" type="password" />
          <footer>
            <span>CONCORDO COM OS <a href="#">TERMOS DA PLATAFORMA</a></span>
            <Button title="CADASTRE"></Button>
          </footer>
        </form>
      </div>
    </Container>
  )
}