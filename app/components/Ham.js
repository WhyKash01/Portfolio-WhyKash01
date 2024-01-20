import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import React from "react";
import Link from "next/link";

const Ham = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex flex-col mt-1 gap-1">
          <div className="bg-[#48C9B0] h-[3px] rounded-md w-5"></div>
          <div className="bg-[#48C9B0] h-[3px] rounded-md w-5"></div>
          <div className="bg-[#48C9B0] h-[3px] rounded-md w-5"></div>
        </SheetTrigger>
        <SheetContent className="bg-zinc-950/90 shadow-l shadow-zinc-700 z-[70] border-l-2 border-zinc-700 ">
          <SheetHeader className="mt-10">
            <Link href="#HeroPage">
              <SheetClose>
                <button type="submit" className=" text-[#48C9B0] text-2xl">Home</button>
              </SheetClose>
            </Link><br />
            <Link href="#Skill">
              <SheetClose>
                <button className="text-[#48C9B0] text-2xl" type="submit">Skill</button>
              </SheetClose>
            </Link>
            <br />
            <Link href="#Project">
              <SheetClose>
                <button className="text-[#48C9B0] text-2xl" type="submit">Project</button>
              </SheetClose>
            </Link>
            <br />
            <Link href="#Contact">
              <SheetClose>
                <button className="text-[#48C9B0] text-2xl" type="submit">Contact</button>
              </SheetClose>
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Ham;
