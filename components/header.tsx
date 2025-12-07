"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Home,
  FileText,
  Wrench,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";
import Dock from "./Dock";

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const dockItems = [
  {
    icon: <Home color="gray" size={18} />,
    label: "Home",
    onClick: () => scrollToSection("#hero"),
  },
  {
    icon: <FileText color="gray" size={18} />,
    label: "Resume",
    onClick: () => scrollToSection("#resume"),
  },
  {
    icon: <Wrench color="gray" size={18} />,
    label: "Tools",
    onClick: () => scrollToSection("#tools"),
  },
  {
    icon: <Briefcase color="gray" size={18} />,
    label: "Experience",
    onClick: () => scrollToSection("#experience"),
  },
  {
    icon: <FolderOpen color="gray" size={18} />,
    label: "Projects",
    onClick: () => scrollToSection("#projects"),
  },
  {
    icon: <Mail color="gray" size={18} />,
    label: "Contact",
    onClick: () => scrollToSection("#contact"),
  },
];

export default function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center items-start">
      <Dock
        items={dockItems}
        panelHeight={50}
        baseItemSize={40}
        magnification={60}
        distance={120}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
      />
    </div>
  );
}
