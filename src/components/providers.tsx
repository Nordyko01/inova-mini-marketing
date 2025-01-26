'use client'
import { usePathname } from "next/navigation";
import Navbar from "./layoult/navbar";
import Rodap from "./layoult/rodap";



export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const getTitleFromPath = (path: string): string => {
        const pathSegments = path.split('/').filter(Boolean);
        const title = pathSegments[pathSegments.length - 1];
        return title?.charAt(0).toUpperCase() + title?.slice(1) || 'Home';
    };
    const pageTitle = getTitleFromPath(pathname);

    return (
    <>
        {pathname?.startsWith("/pages") ? (
          <div> 
          <Navbar/>
          {children}
           <Rodap/>
           </div> 
           ) : 
           children}
    </>
    )
}
