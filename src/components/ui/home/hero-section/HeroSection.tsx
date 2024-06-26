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
            top: "-110px",
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
          sx={{ width: "50%", mt: "20px" }}
          color="gray"
          fontSize={"18px"}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          illum officia commodi, iste deserunt laudantium quia ipsum molestias
          eos exercitationem similique? Iure odit at ullam voluptate.
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
      <Box>Right</Box>
    </Container>
  );
};

export default HeroSection;
