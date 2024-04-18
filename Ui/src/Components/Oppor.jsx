import { Fragment, useState } from "react";
import { FaCheck } from "react-icons/fa";
import ns from "../assets/next-js.svg";

const Oppor = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('role', role);
        formData.append('resume', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/form1', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Error submitting form. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again later.');
        }
    };

  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-10 xl:px-20">
        <div className="w-full lg:w-1/2">
          <h3 className="text-lg text-red-500 capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[110px] before:left-0 before:-bottom-2.5">
            Opportunity
          </h3>
          <h1 className="text-3xl font-bold mb-5">Join SR INFOTECH</h1>
          <p className="mb-4">
            At SR INFOTECH, we believe in the power of collaboration and the
            strength of our diverse community. We welcome individuals with a
            passion for innovation and a drive for excellence to join us on our
            journey of transforming ideas into reality. Whether you're an
            aspiring agent or a skilled developer, there's a place for you here
            to thrive and make an impact.
          </p>
          <ul>
            <li className="mb-5">
              <div className="flex items-start gap-2">
                <FaCheck className="text-red-500" />
                <div>
                  <span className="text-red-500 font-bold block mb-2">
                    Join as a Developer
                  </span>
                  <p>
                    Are you a tech-savvy individual with a passion for coding and
                    a creative flair for design? SR INFOTECH is your platform to
                    shine as a developer. Join our team of over 50+ highly skilled
                    professionals and contribute to the creation of cutting-edge
                    web and mobile applications.
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-start gap-2">
                <FaCheck className="text-red-500" />
                <div>
                  <span className="text-red-500 font-bold block mb-2">
                    Join as an Agent
                  </span>
                  <p>
                    Are you a motivated individual looking to embark on a dynamic
                    career path in the tech industry? At SR INFOTECH, we offer an
                    exciting opportunity for you to join our team as an agent. As
                    an agent, you'll play a crucial role in connecting our
                    cutting-edge solutions with businesses seeking to enhance
                    their online presence.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-10 mt-10 lg:mt-0">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-2 rounded-full px-5 py-3 w-full mb-6"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <div className="flex gap-4 justify-center items-center mb-6">
                    <label className="flex items-center relative border rounded-xl cursor-pointer">
                        <input
                            className="mr-2 radio-input absolute top-2 left-2"
                            type="radio"
                            value="Developer"
                            name="role"
                            onChange={(event) => setRole(event.target.value)}
                        />
                        <span className="radio-tile flex flex-col items-center justify-center w-20 h-20 rounded border border-gray-300 bg-white shadow-md cursor-pointer transition duration-150 ease-in-out">
                        <img src={ns} alt="" />
                            <span className="radio-icon">Developer</span>
                        </span>
                    </label>
                    <label className="flex items-center relative border rounded-xl cursor-pointer">
                        <input
                            className="mr-2 radio-input absolute top-2 left-2"
                            type="radio"
                            value="Agent"
                            name="role"
                            onChange={(event) => setRole(event.target.value)}
                        />
                        <span className="radio-tile flex flex-col items-center justify-center w-20 h-20 rounded border border-gray-300 bg-white shadow-md cursor-pointer transition duration-150 ease-in-out">
                            <img src={ns} alt="" />
                            <span>Agent</span>
                        </span>
                    </label>
                </div>
                <div className="file-container p-4 bg-white rounded-xl border border-gray-300 shadow-md mb-6">
                    <fieldset className="file-input">
                        <legend className="file-input__label block ml-0.25rem py-0.25rem text-sm text-gray-500 font-semibold mb-3">
                            Applications
                        </legend>
                        <label className="file-input__real hidden" aria-hidden="true">
                            <input
                                required
                                type="file"
                                name="resume"
                                id="resume"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <div className="file-input__input relative input flex items-center py-2 px-3">
                            <span className="input__left flex flex-wrap items-center mb-2">
                                <button
                                    type="button"
                                    className="input__choose inline-flex items-center min-h-8 mr-4 px-8 py-2 text-red-500 border-red-500 border rounded-full uppercase font-semibold whitespace-nowrap cursor-pointer"
                                    onClick={() => document.getElementById("resume").click()}
                                >
                                    Choose File
                                </button>
                                <span className="input__no-file mr-4 p-2">
                                    {selectedFile ? selectedFile.name : "No file chosen"}
                                </span>
                                {selectedFile && (
                                    <div className="input__remove cursor-pointer" onClick={() => setSelectedFile(null)}>
                                        <svg className="w-4 h-4 fill-current text-gray-500">
                                            <path d="M3.707 4.293a1 1 0 0 1 1.414 0L8 6.586l3.879-3.879a1 1 0 0 1 1.414 1.414L9.414 8l3.879 3.879a1 1 0 0 1-1.414 1.414L8 9.414l-3.879 3.879a1 1 0 1 1-1.414-1.414L6.586 8 2.707 4.121a1 1 0 0 1 0-1.414z"></path>
                                        </svg>
                                    </div>
                                )}
                            </span>
                        </div>
                    </fieldset>
                    <span className="file-input__helper ml-3 mt-2 text-xs text-gray-500">
                        Upload your resume here
                    </span>
                </div>
                <button type="submit" className="border-red-500 border w-full rounded-full py-3 text-red-500">
                    Submit
                </button>
            </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Oppor;
