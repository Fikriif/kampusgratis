import CourseList from "../course/CourseList";

const page = () => {
  return (
    <>
      <header className="py-10">
        <div className="flex justify-center text-primary font-semibold text-2xl">
          React Query
        </div>
        <div className="flex items-center justify-center text-dark">
          <CourseList />
        </div>
      </header>
    </>
  );
};

export default page;
