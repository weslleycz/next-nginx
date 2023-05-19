import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Container>
        <Box className={styles.container}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid className={styles.contTex} item xs={6}>
              <Box className={styles.text}>
                <Typography variant="h3" gutterBottom>
                  {`Hi, I am\n Weslley`}
                </Typography>
                <strong> Full Stack Developer 🧪</strong>
                <p className={styles.subText}>
                  I am a young developer looking to increase my knowledge.
                </p>
                <Box>
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined">Contact-me</Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Image
                className="animate__animated animate__pulse animate__infinite 
               animate__slower
               animate__delay-1s"
                src="/Astronauta.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
