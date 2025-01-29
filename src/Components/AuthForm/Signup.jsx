import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
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
        type='text' 
        placeholder='Username' 
        fontSize={14}
        value={input.userName}
        name='userName'
        size={"sm"}
        onChange={(e) => setInput({...input, userName: e.target.value})}
      />

      <Input 
        type='text' 
        placeholder='Fullname' 
        fontSize={14}
        value={input.fullName}
        name='fullName'
        size={"sm"}
        onChange={(e) => setInput({...input, fullName: e.target.value})}
      />

      <InputGroup>
        <Input 
          type= {showPassword? "text" : "password"}
          placeholder='Password' 
          fontSize={14}
          value={input.password}
          name='password'
          size={"sm"}
          onChange={(e) => setInput({...input, password: e.target.value})}
        />
        <InputRightElement h={"full"}>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme='blue' fontSize={14} size={"sm"}>
        SignUp
      </Button>
    </>
  )
}

export default Signup
