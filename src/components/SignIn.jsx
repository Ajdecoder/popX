import { useNavigate } from "react-router-dom";
import Input from "../ui/input";
import Button from "../ui/button";
import Container from "../ui/container";

function SignIn() {
  const navigate = useNavigate();

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
          />

          <Input
            label="Password"
            required
            type="password"
            placeholder="Enter password"
          />
        </div>

        {/* Button */}
        <div className="mt-6">
          <Button
            text="Login"
            className="bg-[#CBCBCB] text-white cursor-not-allowed"
            onClick={() => navigate("/dashboard")}
          />
        </div>
      </div>
    </Container>
  );
}

export default SignIn;
