import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const moveToSection = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    el.scrollIntoView(); 
}

export default function WebsiteNavbar() {
  return (
    <Navbar
    className="flex gap-4"
    >
        <NavbarContent 
        className="flex flex-wrap gap-4 justify-center w-full" 
        justify="center"
        >
            <NavbarItem>
                <Link 
                color="foreground" 
                href="#home"
                onClick={(e) => moveToSection(e, "home")}>
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link 
                color="foreground" 
                href="#home"
                onClick={(e) => moveToSection(e, "home")}>
                    About
                </Link> 
            </NavbarItem>
            <NavbarItem>
                <Link 
                color="foreground" 
                href="#skills"
                onClick={(e) => moveToSection(e, "skills")}>
                    Skills
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="#projects" 
                aria-current="projects"
                onClick={(e) => moveToSection(e, "projects")}
                >
                    Projects
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="./images/Anthony Li Resume.pdf"
                aria-current="Resume"
                color="foreground" 
                target="_blank"
                rel="noreferrer"
                >
                    Resume
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="#contact-me"
                aria-current="projects"
                color="foreground" 
                onClick={(e) => moveToSection(e, "contact-me")}
                >
                    Contact
                </Link>
            </NavbarItem>
            
        </NavbarContent>
      
    </Navbar>
  );
}
