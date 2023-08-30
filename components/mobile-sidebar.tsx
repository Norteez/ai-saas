 "use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { 
   Sheet, 
   SheetContent, 
   SheetTrigger 
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

 const MobileSidebar = () => {
   //Hydration Error Fix {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }
   // } Hydration Error Fix

   return ( 
      <Sheet>
         <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                     <Menu />
            </Button>
         </SheetTrigger>
         <SheetContent side="left" className="p-0">
            <Sidebar />
         </SheetContent>
      </Sheet>
   );
 }
 export default MobileSidebar;