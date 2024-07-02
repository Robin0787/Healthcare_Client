import { Specialty } from "@/types/Spciality";
import { Box, Button, Container, Typography } from "@mui/material";
import Slider from "../../slider/Slider";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  let specialties: Specialty[] = data?.data || [];
  const condition = specialties.length > 0;

  return (
    <Container>
      <Box className="my-[40px] mx-0 text-left">
        <Box>
          <Typography variant="h4" component="h1" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Find experienced doctors across all specialist
          </Typography>
        </Box>
        <div className="w-full relative">
          <Slider specialties={specialties} />
        </div>
        <Box className="w-full flex justify-center items-center">
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
