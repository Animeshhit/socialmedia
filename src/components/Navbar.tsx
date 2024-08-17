import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className="py-2 shadow-lg bg-white/65 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/Memogram.svg"
                width={100}
                height={50}
                alt="Memogram"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-sm p-1 font-semibold tracking-tight transition hover:text-black/75"
              >
                Log in
              </Link>
              <Link
                className="py-2 font-semibold text-sm rounded-full px-4 bg-zinc-900 text-white  tracking-tight hover:bg-zinc-600 hover:text-white/65 transition-colors"
                href="/"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
