import React from "react";
import logo from "./logo.jpeg";

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
            <div className="navleft">
              <a href="#" className="logo">
                <img
                  style={{ height: 40, width: 40 }}
                  className="logo"
                  src={logo}
                  alt=""
                />
              </a>
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
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://collab-ed-frontend.vercel.app/"; // Change the URL to Google.com
            }}>Sign in</a>

              <a href="Get stated">DarkMode</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;


