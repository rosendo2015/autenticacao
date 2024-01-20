import { Container } from "./styles"
import astroSignIn from "../../assets/signIn.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(e) {
    e.preventDefault()
    signIn({ email, password })
  }

  return (
    <Container>
      <div className="wrapperImg">
        <img src={astroSignIn} />
      </div>
      <div className="wrapperForm">
        <form>
          <header>
            <p>ENTRAR</p>
            <a href="/register">CADASTRAR</a>
          </header>
          <Input
            onChange={e => setEmail(e.target.value)}
            title="EMAIL"
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            title="SENHA"
            type="password"
          />
          <footer>
            <span>CONCORDO COM OS <a href="#">TERMOS DA PLATAFORMA</a></span>
            <Button
              title="ENTRAR"
              onClick={handleSignIn}
            />
          </footer>
        </form>
      </div>
    </Container>
  )
}