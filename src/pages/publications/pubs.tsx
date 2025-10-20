export interface Publication {
  id: number;
  description: React.ReactNode;
}

export interface Conference {
  id: number;
  description: React.ReactNode;
}

export const publications: Publication[] = [
  {
    id: 1,
    description: (
      <>
        Kanojia, N., Poitras, J., Jones, T., Virdis, B., Southam, G., Doyle, L. (2025). Resolving <em>Shewanella</em> vesicular nanowire structure during
        microbial extracellular electron transfer to a poised electrode. <strong>DOI:</strong>{" "}
        <a href="https://doi.org/10.1016/j.bioelechem.2025.109039" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          https://doi.org/10.1016/j.bioelechem.2025.109039
        </a>
      </>
    ),
  },
  {
    id: 2,
    description: (
      <>
        Kanojia, N., Mudaliar, N., Shaikh, K., & Rathod, D. S. (2019). Detection of drug-resistant organisms from natural water bodies.{" "}
        <em>Research Journal of Life Sciences, Bioinformatics, Pharmaceutical and Chemical Sciences.</em> <strong>DOI:</strong>{" "}
        <a href="https://doi.org/10.26479/2019.0502.71" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          https://doi.org/10.26479/2019.0502.71
        </a>
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        <strong>(In Preparation)</strong> "To Cu or not to Cu – <em>Shewanella</em> mediated reduction of cupric ions in a three-electrode bioelectrochemical
        cell."
      </>
    ),
  },
  {
    id: 4,
    description: (
      <>
        <strong>(In Preparation)</strong> "Harnessing the three-electrode bioelectrochemical system for stress condition determination in electroactive
        bacteria."
      </>
    ),
  },
];

export const conferences: Conference[] = [
  {
    id: 1,
    description: (
      <>
        Selected for and attended the EM-23 Early Career Scientist (ECS) workshop held at the Marine Biological Station,{" "}
        <span className="italic">Rønbjerg</span> organised by the Center for Electromicrobiology (CEM) at Aarhus University, Denmark.
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        Presented a poster of the PhD work at Electromicrobiology-23 (EM-23) conference organised by the Center for Electromicrobiology (CEM) at Aarhus
        University, Denmark.
      </>
    ),
  },
  {
    id: 4,
    description: (
      <>
        Presented a poster of the PhD work at the Two Day international conference on{" "}
        <span className="italic">"Microbial Odyssey: Converging Biotechnology and Industry"</span> organised by DMBC MSU Baroda, Vadodara, India.
      </>
    ),
  },
];
