import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-98px",
            left: "-121px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography
          component="p"
          sx={{ width: "90%", mt: "20px", textAlign: "justify" }}
          color="gray"
          fontSize={"18px"}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          illum officia commodi, iste deserunt laudantium quia ipsum molestias
          eos exercitationem similique.
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={2}
          py={3}
        >
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Stack>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", left: "200px", top: "-30px" }}>
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor1"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "220px", left: "160px" }}>
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={240}
            height={240}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "0px",
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={200}
            height={200}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
