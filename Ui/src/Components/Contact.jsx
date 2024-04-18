import { Fragment, useState } from "react";
import mail from "../assets/mail.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message
    };
  
    try {
      const response = await fetch('http://localhost:5000/form2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
        // Clear form fields after successful submission
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <Fragment>
      <div className="px-4 lg:px-10 xl:px-20 flex flex-col lg:flex-row items-center lg:gap-20">
        <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
          <h1 className="text-3xl font-semibold mb-6">
            Please Feel Free to Contact Us
          </h1>
          <p className="mb-10">
            Thank you for considering our services! If you have any questions or
            would like to learn more about our offerings, please don't hesitate
            to contact us using the form below. Our team of experts will be
            happy to assist you and provide you with all the necessary
            information to help you succeed in the online retail marketplaces.
            We look forward to hearing from you soon!
          </p>
          <p className="font-bold text-xl mb-3">Stay Connected With Us!</p>
          <div className="social-links flex space-x-4 mb-6">
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-[white] rounded-[50%] hover:bg-red-500 transition-colors duration-300"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-[white] rounded-[50%] hover:bg-red-500 transition-colors duration-300"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-[white] rounded-[50%] hover:bg-red-500 transition-colors duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-[white] rounded-[50%] hover:bg-red-500 transition-colors duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <p className="text-lg text-red-500 capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[65px] before:left-0 before:-bottom-2.5">
            Contact
          </p>
          <ul className="flex flex-col lg:flex-row items-center lg:gap-5 mb-10">
            <li>
              <div className="border-2 flex flex-col items-center justify-center p-5 rounded-3xl">
                <img src={mail} alt="" className="w-[3rem] mb-4" />
                <p className="font-bold">+918684562578</p>
                <p className="font-bold">Nishant Kumar</p>
              </div>
            </li>
            <li>
              <div className="border-2 flex flex-col items-center justify-center p-5 rounded-3xl">
                <img src={mail} alt="" className="w-[3rem] mb-4" />
                <p className="font-bold">+918684562578</p>
                <p className="font-bold">Nishant Kumar</p>
              </div>
            </li>
            <li>
              <div className="border-2 flex flex-col items-center justify-center p-5 rounded-3xl">
                <img src={mail} alt="" className="w-[3rem] mb-4" />
                <p className="font-bold">xyz@gmail.com</p>
                <p>xyz</p>
              </div>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="border rounded-2xl px-6 py-2 mb-6"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded-2xl px-6 py-2 mb-6"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border rounded-2xl px-6 py-2 mb-6"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              className="border rounded-2xl px-6 py-2 mb-6"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="text-red-500 border-red-500 border rounded-2xl px-6 py-2 mb-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
