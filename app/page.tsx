import Link from "next/link";
import Footer from "./component/homepage/Footer";
import Header from "./component/homepage/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <section>
          <div className="px-10 flex lg:flex-row md:flex-col">
            <div className="basis-1/2 md:py-20 lg:py-32">
              <div className="font-semibold lg:text-xl sm:text-lg text-dark">
                Selamat Datang di{" "}
                <span className="text-primary">Kampus Gratis</span>
              </div>
              <div className="text-slate-500 pb-10 lg:text-base sm:text-xs">
                Platform belajar gratis pertama di Indonesia, belajar mudah
                dengan kampus gratis bisa diakses siapapun khususnya kaum
                marginal
              </div>
              <a
                href="#"
                className="bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:bg-teal-400 text-white font-bold"
              >
                Login
              </a>
            </div>
            <div className="basis-1/2 py-10">
              <Image src="/teamwork.png" alt="none" width={600} height={600} />
            </div>
          </div>
        </section>
        <section>
          <div className="mt-10 text-2xl w-full flex md:flex-col lg:flex-row justify-around">
            <div className="max-w-64 p-2 border border-solid border-2 border-slate-600 rounded-lg">
              <Link href="/post/Fullstack">
                <div>
                  <div>
                    <Image
                      src="/fullstack1.png"
                      alt="logo"
                      width={250}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="pt-2 text-sm text-primary font-semibold">
                    Bootcamp
                  </div>
                  <div className="pt-3 font-semibold text-dark text-xl">
                    FullStack Development
                  </div>
                  <div className="pt-1 pb-3 text-xs">
                    fast-track program untuk belajar dan mulai karir di bbidang
                    coding dengan fasilitas koneksi kerja seumur hidup
                  </div>
                  <a
                    href="/"
                    className="bg-primary py-1 flex justify-center rounded-lg hover:shadow-lg hover:bg-teal-400 text-base text-white font-bold"
                  >
                    Lihat Detail
                  </a>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/post/2">
                <div className="border-solid">
                  <div>
                    <Image src="" alt="logo" width={150} height={150} />
                  </div>
                  <p>Design Interior</p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/post/3">
                <div>
                  <Image src="" alt="logo" width={150} height={150} />
                </div>
                <p>Data Analist</p>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
