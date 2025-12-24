import Container from "../ui/container";

function AccountSettings() {
  return (
    <Container>
      <div className="flex flex-col h-full">
        
        {/* Header */}
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Account Settings
        </h1>

        {/* Profile section */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            {/* Camera icon */}
            <div className="absolute -bottom-1 -right-1 bg-purple-600 p-1.5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h3l2-3h8l2 3h3v13H3V7z"
                />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
          </div>

          {/* Name & Email */}
          <div>
            <h2 className="font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-500">Marry@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <p className="pr-[17px] pl-[20px] mt-8 text-[14px] text-[#1D2226] leading-[15px] border-b border-dashed border-[#CBCBCB] pb-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
          Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
          Aliquyam Erat, Sed Diam
        </p>

      </div>
    </Container>
  );
}

export default AccountSettings;
