import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">MemoGram</Link>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
