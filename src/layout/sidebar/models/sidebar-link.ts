import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faHome, faBook, faImages, faAtlas} from "@fortawesome/free-solid-svg-icons"
interface sidebarLink {
  path: string,
  icon: IconDefinition,
  label: string
}

export const links: sidebarLink[] = [
  { path : '/', icon: faHome, label: 'Inicio'},
  { path : '/', icon: faBook, label: 'Wiki'},
  { path : '/', icon: faImages, label: 'Galeria'},
  { path : '/', icon: faAtlas, label: 'Referencias'},
]