import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkedIn from "@/assets/landing_page/linkedin.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"}>
      <Container className="py-[60px]">
        <Stack direction={"row"} justifyContent={"center"} gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/NGOs">
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={2} py={4}>
          <Image src={linkedIn} alt="facebook" width={30} height={30} />
          <Image src={twitterIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={instagramIcon} alt="facebook" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
          py={3}
        >
          <Typography color="#fff" component="p">
            &copy;2024 PH HealthCare. All Rights Reserved
          </Typography>
          <Typography color="#fff" variant="h4" component="h1" fontWeight={600}>
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#fff" component="p">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
