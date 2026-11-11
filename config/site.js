// Edit confirmed public information here. Empty fields are intentionally hidden.
window.RFWS_SITE = {
  name: "RFW-S",
  fullName: "RobotFlyWheel-Soft",
  title: "RFW-S: Everyday Deformable Objects with Independent Simulation Verification",
  authors: [], // {name: "", url: "", affiliations: ["1"]}
  affiliations: [], // {id: "1", name: ""}
  links: {
    manuscript: "assets/RFW-S_manuscript.pdf",
    arxiv: "",
    code: "",
    dataset: "",
    license: ""
  },
  canonicalUrl: "https://sjijs.github.io/RFW-S_website/",
  citation: "", // Insert only the author-approved BibTeX; no generated identities.
  census: [
    {family: "Soft solids", categories: 168, pool: 34641, physical: 21112, runtime: 34502, both: 21103},
    {family: "Cloth sheets", categories: 89, pool: 18347, physical: 18308, runtime: 18097, both: 18064},
    {family: "Shells", categories: 63, pool: 12990, physical: 11415, runtime: 12990, both: 11415},
    {family: "Garments", categories: 94, pool: 19386, physical: 19055, runtime: 19386, both: 19055},
    {family: "Bags", categories: 71, pool: 14636, physical: 13728, runtime: 14611, both: 13728}
  ],
  benchmark: [
    {method: "Fixed command", task: 245, total: 340, percent: 72.1, intact: 0, damage: 0.654},
    {method: "Slip feedback", task: 245, total: 340, percent: 72.1, intact: 0, damage: 0.784},
    {method: "Force prior (local)", task: 200, total: 340, percent: 58.8, intact: 0, damage: 0.478},
    {method: "Privileged reference", task: 200, total: 340, percent: 58.8, intact: 0, damage: 0.493, privileged: true}
  ]
};
