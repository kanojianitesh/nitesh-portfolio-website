function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-12 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        <div className="md:w-2/3 text-left">
          <p className="text-lg leading-relaxed text-justify">
            Hello! I am Nitesh Kanojia, a multidisciplinary researcher in the
            field of microbiology experienced in handling bacterial as well as
            mammalian cell cultures and associated microbiological, biochemical,
            and molecular biology techniques in academic and industry settings.
            Also skilled in electrochemical, electron microscopy, and
            spectroscopic elemental analysis techniques. Adaptable, amiable, and
            cross-functional team player well-versed with a variety of research
            environments. Self-motivated and eager to tackle challenging and
            diverse research questions.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/src/assets/nitesh_photo.jpeg"
            alt="Nitesh Kanojia"
            className="rounded-lg object-cover border shadow-lg w-64 h-[360px] md:w-72 md:h-[405px] lg:w-80 lg:h-[450px]"
          />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Technical Skills
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Electrochemical Techniques: Chronoamperometry, Cyclic Voltammetry,
            Chronocoulometry
          </li>
          <li>
            Imaging: Scanning & Transmission Electron Microscopy, Energy
            Dispersive Spectroscopy
          </li>
          <li>
            Biochemical & Molecular Biology Techniques: Aseptic Handling, Cell
            Culture, Plasmid Handling, Protein Analysis
          </li>
          <li>Analysis Tools: GraphPad Prism, ImageJ/FIJI, Inkscape</li>
        </ul>
      </div>

      {/* Education */}
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-center">Education</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Ph.D. in Electromicrobiology, University of Queensland – IIT Delhi
            Research Academy (2020 – Present), CGPA: 8.6/10
          </li>
          <li>
            M.Sc. in Microbiology, The Maharaja Sayajirao University of Baroda
            (MSU Baroda), Vadodara (2017 – 2019), CGPA: 6.87/10
          </li>
          <li>
            B.Sc. in Microbiology, Kishinchand Chellaram College, University of
            Mumbai (2014 – 2017), CGPA: 6.94/7
          </li>
        </ul>
      </div>

      {/* Awards */}
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Awards & Recognition
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            FEMS Travel Grant, Electromicrobiology-23 Conference, Aarhus
            University, Denmark
          </li>
          <li>
            ANSTO Beamtime Grant (AUD 98,352 each, twice), Australian
            Synchrotron XFM Beamline
          </li>
          <li>UQ Research Training Tuition Fee & Stipend Scholarship</li>
          <li>All-India Rank 219 (98.7 Percentile), GATE 2019</li>
          <li>
            Jigyaasa Science Honors (A+ Grade), Microbiology Group Research
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
