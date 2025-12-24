import { useNavigate } from "react-router-dom";
import Button from "../ui/button";
import Container from "../ui/container";

function Welcome() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="relative flex flex-col h-full justify-end">
        
        {/* Settings button (top-right) */}
        <button
          onClick={() => navigate("/account-settings")}
          className="absolute top-0 right-0 p-2 text-gray-600 hover:text-[#4709c4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.983 13.945a1.963 1.963 0 100-3.926 1.963 1.963 0 000 3.926z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01A1.65 1.65 0 0010 3.09V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01A1.65 1.65 0 0020.91 10H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
            />
          </svg>
        </button>

        {/* Text */}
        <div className="mb-3">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Welcome to PopX
          </h1>

          <p className="text-gray-500 text-[1rem] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Bottom buttons */}
        <div>
          <Button
            text="Create Account"
            className="bg-[#4709c4] text-white hover:bg-[#3b079f]"
            onClick={() => navigate("/create-account")}
          />

          <Button
            text="Already Registered? Login"
            className="bg-[#d9caf8] text-black hover:bg-[#E0D4FF]"
            onClick={() => navigate("/signin")}
          />
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
