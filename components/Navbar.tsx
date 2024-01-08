"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
// import { usePathname } from "next/navigation";

const Navbar = () => {
  //   const pathName = usePathname();

  return (
    <div className="sticky top-0 inset-x-0 z-20 h-16 text-black">
      <header
        className={`relative border-b border-black transition-all duration-60`}
      >
        <MaxWidthWrapper className={`transition-all duration-600  `}>
          <div className="flex h-16 items-center">
            {/* TODO: mobile navbar */}

            <div className="ml-4 flex md:ml-0">
              <Link
                href="/"
                className="flex items-center text-lg font-semibold"
              >
                TryOut
              </Link>
            </div>

            <div className="ml-auto flex items-center"></div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
