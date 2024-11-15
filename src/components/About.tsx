const About = () => {
  return (
    <section id="about" className="relative h-screen flex items-center justify-center bg-background text-foreground fade-in">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="w-48 h-48 mx-auto">
          <img
            src="/profile.png"
            alt="Yashita Mittal"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-6 text-4xl font-bold">Tanapat Chamted</h1>
        <p className="mt-4 text-muted-foreground">AI Developer</p>
        <div className="mt-8 space-y-4 text-center">
          <p>
            Hi, I'm Tanapat Chamted, an Information Technology student at KMITL. I work with AI technologies and software development, mainly focusing on MultiModal AI, LLMs, and computer vision. I'm particularly interested in low-level programming and CUDA development. My primary programming languages are Python, JavaScript, and C++.
          </p>
        </div>  
      </div>
    </section>
  );
};

export default About;