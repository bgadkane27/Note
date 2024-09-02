const SectionHero = () => {
  return (
    <section className="section-hero"
    style={{
        backgroundImage: "url('/wall.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      <div className="heading">
        <img src="/logo.png" alt="Logo" />
        <h1 className="hero-head">
          Organize your work <br />
          With us
        </h1>
        <p>
          Remember everything and tackle any project with your notes, tasks, and
          schedule all in one place.
        </p>
        <button className="button-hero">Download App</button>
        <p>By downloading App, you agree to the terms and conditions.</p>
      </div>
    </section>
  );
};

export default SectionHero;
