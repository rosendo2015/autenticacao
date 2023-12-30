import { Container } from "./styles"
import astroSignIn from "../../assets/signIn.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
export function SignIn() {
  return (
    <Container>
      <div className="wrapperImg">
        <img src={astroSignIn} />
      </div>
      <div className="wrapperForm">
        <form>
          <header>
            <p>ENTRAR</p>
            <Link to="register">CADASTRAR</Link>
          </header>
          <Input title="EMAIL" />
          <Input title="SENHA" type="password" />
          <footer>
            <span>CONCORDO COM OS <a href="#">TERMOS DA PLATAFORMA</a></span>
            <Button title="ENTRAR"></Button>
          </footer>
        </form>
      </div>
    </Container>
  )
}