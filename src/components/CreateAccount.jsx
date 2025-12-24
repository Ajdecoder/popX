import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/input";
import Button from "../ui/button";
import { Radio } from "./Radio";
import Container from "../ui/container";

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };

  const isDisabled = !formData.email || !formData.password || !formData.fullName || !formData.phoneNumber || !formData.companyName || !formData.isAgency


  return (
    <Container>
      <div>
        <div className="mobile-container w-full max-w-[375px] relative">

        </div>
        <div className="relative">
          <h1 className="text-3xl font-bold text-popx-gray-700 leading-tight">
            Create your<br />PopX account
          </h1>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6 flex-grow pr-1 mt-5">
          <div className="space-y-2">
            <Input
              required={true}
              label={'Full Name'}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Merry Doe"
              className="form-input w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              required={true}
              label={'Phone number'}
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Merry Doe"
              className="form-input w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              required={true}
              label={'Email address'}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Merry Doe"
              className="form-input w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              required={true}
              label={'Password'}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Merry Doe"
              className="form-input w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              label={'Company name'}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Merry Doe"
              className="form-input w-full"
            />
          </div>

          <p className="mb-2">Are you an Agency?<span class="text-[#DD4A3D]">*</span></p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Radio
              name="isAgency"
              value="yes"
              checked={formData.isAgency === "yes"}
              onChange={handleChange}
              label="Yes"
            />
            <Radio
              name="isAgency"
              value="no"
              checked={formData.isAgency === "no"}
              onChange={handleChange}
              label="No"
            />
          </div>


          <Button
            text="Create Account"
            className={` ${isDisabled && "bg-[#CBCBCB] text-white cursor-not-allowed hover:bg-[#CBCBCB]"} bg-[#4709c4] text-white hover:bg-[#3b079f] relative top-[5rem]`}
            disabled={isDisabled}
          />
        </form>
      </div>
    </Container>
  );
}

export default CreateAccount