import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import "./auth.css"


const Layout = async ({children}: {children: React.ReactNode}) => {
const user = await currentUser()

if (user) redirect("/") 

return <>
{children}
</>
}

export default Layout