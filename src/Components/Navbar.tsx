import React from "react";
import logo from "./collabed_logo.png";

const Navbar: React.FC = () => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }
    if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.add("scroll-up");
      body.classList.remove("scroll-down");
    }
    if (
      currentScroll > lastScroll &&
      !body.classList.contains("scroll-down")
    ) {
      body.classList.add("scroll-down");
      body.classList.remove("scroll-up");
    }
    lastScroll = currentScroll;
  });

  document.addEventListener("click", (e: MouseEvent) => {
    const isDropdownButton: boolean = (e.target as HTMLElement).matches("[data-dropdown-a]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return;
    let currentDropdown: HTMLElement | null;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]") as HTMLElement;
      currentDropdown.classList.toggle("active");
    }
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });
  
  

  return (
    <>
      <div className="wrapper">
        <div className="navbar sticky">
          <nav>
              <a href="#" className="logo">
                <img
                  style={{ height: 50, width: 130, filter : "grayscale(200%) brightness(0)" }}
                  className="logo"
                  src={logo}
                  alt=""
                />
              </a>
            <div className="navleft">
              <a href="home">Home</a>
              <div className="dropdown" data-dropdown>
                <a href="javascript:void(0);" className="link" data-dropdown-a>
                  About us
                </a>
              </div>
              <div className="dropdown" data-dropdown>
                <a href="javascript:void(0);" className="link" data-dropdown-a>
                  Resources
                </a>
              </div>
              <a href="Contactus">Contact us</a>
            </div>
            <div className="navright">
            <a href="#" 
              style={{padding : "5px 20px", background : "white", borderRadius : "20px"}}
              onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://app-collabed.vercel.app/"; // Change the URL to Google.com
            }}>Sign in</a>

              {/* <a href="Get stated">DarkMode</a> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;


