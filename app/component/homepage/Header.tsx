import Link from "next/link";

const Header = () => {
  return (
    <div className="shadow-md py-4 px-14 bg-transparent">
      <header className="flex justify-between">
        <div className="md:text-lg lg:text-2xl text-primary font-semibold">
          Kampus Gratis
        </div>
        <div className="flex flex-row gap-4 md:text-xs lg:text-base">
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/course">
            <div>Course</div>
          </Link>
          <Link href="/blog">
            <div>Blog</div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
