import { Center, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function BasicForm() {
  const [emailInput, setEmailInput] = useState("");
  const handleEmailChange = (e: any) => setEmailInput(e.target.value);

  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e: any) => setPasswordInput(e.target.value); // TODO: Encryption

  return (
    <FormControl>
      <Center>
        <Input
          placeholder="Email"
          type="email"
          value={emailInput}
          onChange={handleEmailChange}
          width={["2xs", "md"]}
          height={["40px", "50px"]}
        />
      </Center>
      <Center>
        <Input
          placeholder="Password"
          type="password"
          value={passwordInput}
          onChange={handlePasswordChange}
          width={["2xs", "md"]}
          height={["40px", "50px"]}
          marginTop="10px"
        />
      </Center>
    </FormControl>
  );
}
