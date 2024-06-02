import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "{{ cookiecutter.project_name}}",
  description:
    "{{ cookiecutter.short_description }}",
  url: "",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "",
    github: "",
  },
}