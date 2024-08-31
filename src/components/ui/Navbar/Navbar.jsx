import React from 'react';
import { Button } from '../button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../sheet"
import { Menu } from "lucide-react"
import logo from '@/assets/logo-white.png';

const NavItems = ({ className = "" }) => (
  <>
    <li><a className={`${className} text-white hover:text-purple-100`}>Home</a></li>
    <li><a className={`${className} text-white hover:text-purple-100`}>El Hospital</a></li>
    <li><a className={`${className} text-white hover:text-purple-100`}>Plan de Salud</a></li>
    <li><a className={`${className} text-white hover:text-purple-100`}>Productos</a></li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-purple-700">
      <div className="navbar-start">
        <a href="/" className="px-4">
          <img src={logo} alt="MyApp Logo" className="h-14" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex pr-4">
        <ul className="menu menu-horizontal px-1">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-purple-600">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-purple-700">
            <ul className="menu">
              <NavItems className="text-lg py-2" />
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
