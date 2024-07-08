import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <header>
          <div className="flex justify-between m-7 border-b-indigo-500">
            <div className="flex flex-row gap-2">
              <div>Home</div>
              <div>About Us</div>
            </div>
            <div className="text-2xl">Kampus Gratis</div>
            <div className="flex flex-row gap-2">
              <div>Course</div>
              <div>Blog</div>
            </div>
          </div>
        </header>
        {/* <h1 className="mt-10 flex justify-center text-2xl">Kampus Gratis</h1> */}
        <h1 className="mt-10 flex justify-center text-5xl">Hello World</h1>
        <div className="mt-10 text-2xl w-full flex flex-row justify-around">
          <div>
            <Link href="/post/1">
              <p>Post 1</p>
            </Link>
          </div>
          <div>
            <Link href="/post/2">
              <p>Post 2</p>
            </Link>
          </div>
          <div>
            <Link href="/post/3">
              <p>Post 3</p>
            </Link>
          </div>
        </div>

        <footer className="">
          <div className="my-20 text-3xl bg-blue-500">
            selamat datang di kampus gratis
          </div>
        </footer>
      </div>
    </>
  );
}
