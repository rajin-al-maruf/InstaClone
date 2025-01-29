import { Input, Button } from "@chakra-ui/react"
import { useState } from "react"

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
      })
      
  return (
    <>
        <Input 
            type='email' 
            placeholder='Email' 
            fontSize={14}
            value={input.email}
            name='email'
            size={"sm"}
            onChange={(e) => setInput({...input, email: e.target.value})}
        />

        <Input 
            type='password' 
            placeholder='Password' 
            fontSize={14}
            value={input.password}
            name='password'
            size={"sm"}
            onChange={(e) => setInput({...input, password: e.target.value})}
        />

        <Button w={"full"} colorScheme='blue' fontSize={14} size={"sm"}>
            Log in
        </Button>
    </>
  )
}

export default Login
