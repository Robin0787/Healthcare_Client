import HeroSection from "@/components/ui/home/hero-section/HeroSection";
import Specialist from "@/components/ui/home/specialist/Specialist";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Box className="py-[20px]"></Box>
      <Specialist />
    </>
  );
}
