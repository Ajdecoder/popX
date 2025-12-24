import { useNavigate } from "react-router-dom";
import Input from "../ui/input";
import Button from "../ui/button";
import Container from "../ui/container";
import { useEffect, useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: ""
  })

  const isDisabled = !user.email || !user.password;

  return (
    <Container>
      {/* TOP SHIFT WRAPPER */}
      <div className="pt-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            Signin to your <br /> PopX account
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>

        {/* Form */}
        <div className="space-y-4">
          <Input
            label="Email address"
            required
            placeholder="Enter email address"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />

          <Input
            label="Password"
            required
            type="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </div>

        {/* Button */}
        <div className="mt-6">
          <Button
            text="Login"
            className={`${isDisabled
                ? "bg-[#CBCBCB] text-white cursor-not-allowed"
                : "bg-[#d9caf8] text-black"
              }`}
            disabled={isDisabled}
          />
        </div>
      </div>
    </Container>
  );
}

export default SignIn;
