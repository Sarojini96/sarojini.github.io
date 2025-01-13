import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMail, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col items-center py-6 shadow-lg">
      {/* Profile Image */}
      <div className="mb-6">
        <Image
          src="/images/profile2.jpg" // Replace with your image path
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-indigo-400 shadow-md"
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-2xl font-bold">Sarojini</h1>
      <p className="text-indigo-400 text-sm mt-2">Software Developer</p>

      {/* Navigation Menu */}
      <nav className="mt-8 flex flex-col space-y-7">
        <Link href="#hero" legacyBehavior>
          <a className="flex items-center space-x-6 text-white hover:text-indigo-400 transition-colors">
            <AiOutlineHome className="text-xl" />
            <span>Home</span>
          </a>
        </Link>
        <Link href="#about" legacyBehavior>
          <a className="flex items-center space-x-6 text-white hover:text-indigo-400 transition-colors">
            <AiOutlineUser className="text-xl" />
            <span>About</span>
          </a>
        </Link>
        {/* <Link href="#specialties" legacyBehavior>
          <a className="flex items-center space-x-6 text-white hover:text-indigo-400 transition-colors">
            <AiOutlineMail className="text-xl" />
            <span>Specialties</span>
          </a>
        </Link> */}
        <Link href="#portfolio" legacyBehavior>
          <a className="flex items-center space-x-6 text-white hover:text-indigo-400 transition-colors">
            <AiOutlineProject className="text-xl" />
            <span>Portfolio</span>
          </a>
        </Link>
        <Link href="#contact" legacyBehavior>
          <a className="flex items-center space-x-6 text-white hover:text-indigo-400 transition-colors">
            <AiOutlineMail className="text-xl" />
            <span>Contact</span>
          </a>
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="mt-auto flex space-x-6">
        <a
          href="https://github.com/Sarojini96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition-colors"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/sarojini-mathiyalagan-805354153/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition-colors"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://www.instagram.com/__sarojini__/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition-colors"
        >
          <FaInstagram
           className="text-xl" />
        </a>
      </div>
    {/* Footer Section */}
    <div className="mt-auto text-center py-4 bg-gray-900 text-gray-400">
  {/* <p className="mb-1 text-sm">
    © {new Date().getFullYear()}{" "}
    <span className="text-white font-medium">Sarojini</span>. All rights reserved.
  </p> */}
  <p className="text-sm">
  © {new Date().getFullYear()}{" "}Designed by{" "}
    <a
      href="https://www.instagram.com/__sarojini__/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 hover:text-indigo-300 hover:underline"
    >
      Me
    </a>
  </p>
</div>

</div>
  );
}
