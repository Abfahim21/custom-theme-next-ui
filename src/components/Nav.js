import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@nextui-org/react";

import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Sign In",
    "Sign Up",
    "Log Out",
  ];
  return (
    <Navbar
      height="5rem"
      position="sticky"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="flex"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex flex-1 items-center">
          <h1 className="font-bold text-inherit">Chat Monster</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex flex-1 items-center justify-center gap-10 text-sm font-semibold leading-6 lg:flex"
        justify="center"
      >
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Affiliates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" href="#" color="foreground">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Resources
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="hidden sm:flex flex-1 items-center justify-center gap-2 text-sm font-semibold leading-6 text-gray-900 lg:flex"
      >
        <NavbarItem></NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/register" color="primary">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/register"
            className="ml-2 rounded-xl px-4 py-2  text-sm font-semibold  leading-7 shadow-sm"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full ml-5"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
