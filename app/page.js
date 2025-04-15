import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import {Linelinearchart} from '@/components/Linelinearchart'
import { Typeschoolandmotivationbarcahrt } from "@/components/Typeschoolandmotivationbarcahrt";
import BarchartofPhysicalacrivity from "@/components/BarchartofPysicalacrivity";
import { PublicPrivateQualtyEducation } from "@/components/PublicPrivateQualtyEducation";
import { GendersineachSchool } from "@/components/GendersineachSchool";

export default function Home() {
  return (
   <div>
    <div className="flex items-center flex-wrap justify-around">
<Cards />
    </div>
    <div>
  <Linelinearchart />
    </div>
    <div>
  <Typeschoolandmotivationbarcahrt />
    </div>
    <div>
  <BarchartofPhysicalacrivity />
    </div>
    <div>
  <PublicPrivateQualtyEducation />
    </div>
    <div>
  <GendersineachSchool />
    </div>
   </div>
  );
}
