import { LayoutDashboard, UserPen } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";



const NavBar = () => {

const links = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard /> },
    { name: 'Profile', path: '/admin/profile', icon: <UserPen /> },
  ];


  return (

    <NavigationMenu>
      <NavigationMenuList>
        {links.map(link => (
          <NavigationMenuItem key={link.name}>
              <NavigationMenuLink href={link.path}>{link.icon}{link.name}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavBar