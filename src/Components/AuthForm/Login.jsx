import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
      })

    const {loading, error, login} = useLogin()
      
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

        {error && (
            <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
        )}

        <Button 
            onClick={() => login(input)} 
            isLoading={loading}
            w={"full"} 
            colorScheme='blue' 
            fontSize={14} size={"sm"}>
            Log in
        </Button>
    </>
  )
}

export default Login
