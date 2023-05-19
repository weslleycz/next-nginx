import { Box, Stack } from "@mui/material";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <>
      <Box>
        <Box className={styles.cont}>
          <Box>
            <a href="/">
              <h2>Logo</h2>
            </a>
          </Box>
          <Stack
            sx={{
              marginRight: 3,
            }}
            direction="row"
            spacing={5}
          >
            <Box>
              <a href="#">
                <strong>About</strong>
              </a>
            </Box>
            <Box>
              <a href="#">
                <strong>Skills</strong>
              </a>
            </Box>
            <Box>
              <a href="#">
                <strong>Contact me</strong>
              </a>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
