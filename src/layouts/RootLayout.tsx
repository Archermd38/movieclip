import NavBar from "@/components/manualcomponent/NavBar"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default RootLayout