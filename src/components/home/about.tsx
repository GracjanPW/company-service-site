export const About = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-row items-center fade-in w-1/2">
        <img
          src="https://picsum.photos/400"
          alt="About Us"
          className="mr-8 fade-in"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold fade-in">About Us</h1>
          <p className="mt-4 fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquet, nisl id lacinia. Nulla facilisi. Nullam nec purus ut sapien
            malesuada aliquet. Nullam nec purus ut sapien malesuada aliquet.
            Nullam nec
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolore
            assumenda odio fugiat iusto dolorum excepturi explicabo? Dolore qui
            incidunt cumque animi necessitatibus doloribus quam, at iure
            laboriosam perferendis laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
