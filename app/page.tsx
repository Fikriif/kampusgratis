import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="mt-10 flex justify-center text-2xl">Kampus Gratis</h1>
        <h1 className="mt-10 flex justify-center text-5xl">Hello World</h1>
        <div className="w-full flex flex-row justify-items-center">
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
      </div>
    </>
  );
}
