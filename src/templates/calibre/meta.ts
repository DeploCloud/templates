import type { TemplateRaw } from "../../schemas";

export default {
  name: "Calibre",
  shortDescription: "E-book library manager that organizes, converts, and reads collections across most major formats and reader devices.",
  category: {"name":"CMS","icon":"layout-template","description":"Blogs, sites, headless content APIs and the storefronts built on top of them."},
  developedBy: {"label":"kovidgoyal","url":"https://github.com/kovidgoyal"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/kovidgoyal/calibre","website":"https://calibre-ebook.com/","docs":"https://manual.calibre-ebook.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
