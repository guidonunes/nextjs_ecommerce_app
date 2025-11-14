"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Store",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard/",
    },
    {
      name: "Cart",
      link: "/cart/",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className ='bg-black h-20 p-2'>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems}  />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary"><Link href="/dashboard/login" className="px-3 py-2 bg-amber-500 text-black rounded hover:bg-amber-600 text-[18px]">Log in</Link></NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full px-3 py-2 bg-amber-500 text-black rounded hover:bg-amber-600 text-[18px]"
              >
                <Link href="/dashboard/login">Log in</Link>
              </NavbarButton>

            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>


      {/* Navbar */}
    </div>
  );
}











//  <header className="bg-[#1f1f1f] text-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <Link href="/" className="text-3xl font-bold text-white">Next<span className="text-red-600">Store</span></Link>
//         <nav className="flex items-center gap-4">
//           <Link href="/" className="text-white hover:text-amber-500">Store</Link>
//           <Link href="/dashboard/" className="text-white hover:text-amber-500">Products</Link>
//           <Link href="/cart/">Cart</Link>
//           <Link href="/dashboard/login" className="px-3 py-2 bg-amber-500 text-black rounded hover:bg-amber-600">Log in</Link>
//         </nav>
//       </div>
//     </header>
