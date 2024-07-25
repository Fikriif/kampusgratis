import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-primary font-semibold text-2xl pt-4">
        List Courses
      </div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-60">
        <div className="border border-3 border-black rounded-xl p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/course.jpg"
              alt="none"
              width={320}
              height={320}
              className="rounded-xl"
            />
          </div>
          <div className="py-2 text-primary font-semibold">Course Online</div>
          <div className="text-dark text-sm">ini paragraf</div>
          <Link
            href="/post/onlineCourse"
            className="bg-primary py-1 flex justify-center rounded-lg hover:shadow-lg hover:bg-teal-400 text-base text-white font-bold"
          >
            Lihat Detail
          </Link>
        </div>
        <div className="border border-3 border-black rounded-xl p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/bootcamp.jpg"
              alt="none"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="py-2 text-primary font-semibold">Bootcamp</div>
          <div className="text-dark text-sm">Ini Paragraf</div>
          <Link
            href="/post/onlineCourse"
            className="bg-primary py-1 flex justify-center rounded-lg hover:shadow-lg hover:bg-teal-400 text-base text-white font-bold"
          >
            Lihat Detail
          </Link>
        </div>
        <div className="border border-3 border-black rounded-xl p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/course.jpg"
              alt="none"
              width={320}
              height={320}
              className="rounded-xl"
            />
          </div>
          <div className="py-2 text-primary font-semibold">Course Online</div>
          <div className="text-dark text-sm">ini paragraf</div>
          <Link
            href="/post/onlineCourse"
            className="bg-primary py-1 flex justify-center rounded-lg hover:shadow-lg hover:bg-teal-400 text-base text-white font-bold"
          >
            Lihat Detail
          </Link>
        </div>
        <div className="border border-3 border-black rounded-xl p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/course.jpg"
              alt="none"
              width={320}
              height={320}
              className="rounded-xl"
            />
          </div>
          <div className="py-2 text-primary font-semibold">Course Online</div>
          <div className="text-dark text-sm">ini paragraf</div>
          <Link
            href="/post/onlineCourse"
            className="bg-primary py-1 flex justify-center rounded-lg hover:shadow-lg hover:bg-teal-400 text-base text-white font-bold"
          >
            Lihat Detail
          </Link>
        </div>
        <div className="border border-3 border-black rounded-xl p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/course.jpg"
              alt="none"
              width={320}
              height={320}
              className="rounded-xl"
            />
          </div>
          <div className="py-2 text-primary font-semibold">Course Online</div>
          <div className="text-dark text-sm">ini paragraf</div>
          <Link
            href="/post/onlineCourse"
            className="bg-primary py-1 flex justify-center rounded-lg hover:shadow-lg hover:bg-teal-400 text-base text-white font-bold"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
