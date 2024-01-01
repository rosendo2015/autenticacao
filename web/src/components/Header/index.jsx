import { Container } from "./styles";
import astronauta from "../../assets/astronauta.png"
import { useAuth } from "../../hooks/auth"
import { RiShutDownLine } from "react-icons/ri";
export function Header() {
  const { signOut, user } = useAuth()
  return (
    <Container>
      <img src={astronauta} alt="" />
      <div className="wrapperLeftHeader">
        <span>{user.name}</span>
        <RiShutDownLine
          size={50}
          onClick={signOut}
        />
      </div>
    </Container>
  )
}