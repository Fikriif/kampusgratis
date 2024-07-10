import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white">
        <div className="mt-60 pt-20 pb-5">
          <div className="flex justify-around">
            <div>
              <div className="text-2xl pb-2 font-semibold text-primary">
                Kampus Gratis
              </div>
              <div className="text-xl font-semibold pb-1">Hubungi Kami</div>
              <div className="text-xs text-slate-500">fikribnuf@gmail.com</div>
              <div className="text-xs text-slate-500">
                Jl. Raya Cirendeu No. 61, Ruko Abu-Abu Sebelah PPAT
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold pb-2">Kategori Tulisan</div>
              <div className="text-xs text-slate-500">
                <div>FullStack Development</div>
                <div>UI/UX Design</div>
                <div>Data Science</div>
              </div>
            </div>
            <div>
              <div className="text-xl pb-2 font-semibold">Tautan</div>
              <div className="text-xs text-slate-500">
                <div>Home</div>
                <div>Blog</div>
                <div>Course</div>
                <div>About</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 pt-20">
            <Image src="/twitter.png" alt="none" width={30} height={30} />
            <Image src="/facebook.png" alt="none" width={30} height={30} />
            <Image src="/insta.png" alt="none" width={30} height={30} />
            <Image src="/linkedin.png" alt="none" width={30} height={30} />
            <Image src="/whatsapp.png" alt="none" width={30} height={30} />
          </div>
          <div className="flex justify-center text-slate-500 text-xs pt-4">
            Dibuat Oleh Fikri Ibnu Fajar Menggunakan Tailwind CSS dan Nextjs 14
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
