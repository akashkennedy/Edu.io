import { edu_io, company, products, support } from "../constants/footer.js";
import Twitter from "../assets/footer/twitter.png";
import Facebook from "../assets/footer/facebook.png";
import LinkedIn from "../assets/footer/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="flex justify-between px-10 mb-3">
        <div>
          <h3 className="mb-4">Edu.io</h3>
          <ul>
            {edu_io.map((link) => (
              <li key={link.id} className="mb-2 cursor-pointer">
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Products</h3>
          <ul>
            {products.map((link) => (
              <li key={link.id} className="mb-2 cursor-pointer">
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Company</h3>
          <ul>
            {company.map((link) => (
              <li key={link.id} className="mb-2 cursor-pointer">
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Support</h3>
          <ul>
            {support.map((link) => (
              <li key={link.id} className="mb-2 cursor-pointer">
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex px-10 gap-3 cursor-pointer">
          <img src={Twitter} alt="" className="size-8" />
          <img src={Facebook} alt="" className="size-8" />
          <img src={LinkedIn} alt="" className="size-8" />
        </div>
        <p className="px-10">
          Copyright@ {new Date().getFullYear()}{" "}
          <a
            href="https://www.github.com/akashkennedy"
            target="_blank"
            className="underline"
          >
            Akash Kennedy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
