import { Specialty } from "@/types/Spciality";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  let specialties: Specialty[] = data?.data || [];
  const condition = specialties.length > 0;
  if (data.length > 4) {
    specialties = specialties.slice(0, 4);
  }

  return (
    <Container>
      <Box className="my-[40px] mx-0 text-left overflow-hidden">
        <Box>
          <Typography variant="h4" component="h1" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Find experienced doctors across all specialist
          </Typography>
        </Box>
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          mt={5}
        >
          {condition ? (
            specialties.map((specialty) => (
              <Box
                key={specialty.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "240px",
                  height: "180px",
                  backgroundColor: "rgba(245,245,245,1)",
                  border: "2px solid rgba(250,250,250,1)",
                  borderRadius: "6px",
                  padding: "40px 10px",
                  transition: "0.3s",
                  cursor: "pointer",
                  "& img": {
                    margin: "0 auto",
                  },
                  "&:hover": {
                    border: "2px solid	#1586FD60",
                  },
                }}
              >
                <Stack className="space-y-1">
                  <Image
                    src={specialty.icon}
                    alt="specialty icon"
                    width={50}
                    height={50}
                  />
                  <Box className="text-center capitalize">
                    <Typography variant="h6" component="h4">
                      {specialty.title}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))
          ) : (
            <Box className="py-14 flex justify-center items-center rounded w-full bg-[rgba(245,245,245,1)]">
              <Typography variant="h5" component="h5">
                No specialties available right now!
              </Typography>
            </Box>
          )}
        </Stack>
        <Box className="mt-6 w-full flex justify-center items-center">
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
