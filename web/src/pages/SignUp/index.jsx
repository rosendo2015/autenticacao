import { Container } from "./styles"
import astro from "../../assets/signUp.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  function handleSignUp(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos.")
    }
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }
  return (
    <Container>
      <div className="wrapperImg">
        <img src={astro} />
      </div>
      <div className="wrapperForm">
        <form >
          <header>
            <p>CADASTRO</p>
            <a href="/">ENTRAR</a>
          </header>
          <Input
            onChange={e => setName(e.target.value)}
            title="NOME DE USUÁRIO"
            type="text"
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            title="EMAIL"
            type="text"
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            title="SENHA"
            type="password"
          />
          <footer>
            <span>CONCORDO COM OS <a href="#">TERMOS DA PLATAFORMA</a></span>
            <Button
              title="CADASTRE"
              type="submit"
              onClick={handleSignUp}
            ></Button>
          </footer>
        </form>
      </div>
    </Container>
  )
}