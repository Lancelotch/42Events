import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

const ContainerFootbar = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.common.black};
    height: ${theme.spacing(20)};
    width: 100%;
`
);

const MainFootbar = styled(Box)(
  ({ theme }) => `
      width: 100%;
      display: flex;
      justify-content: space-between;
  `
);

const navigatorsLeft = ["About", "Contact", "Corporate Solutions", "Press"];

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ContainerFootbar>
      <MainFootbar>
        <Stack spacing={2} direction="row">
          {navigatorsLeft.map((nav) => (
            <Typography component="a" color="white" href={`/${nav}`}>
              {nav}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={2} direction="row">
          {navigatorsLeft.map((nav) => (
            <Typography component="a" color="white" href={`/${nav}`}>
              {nav}
            </Typography>
          ))}
        </Stack>
      </MainFootbar>
    </ContainerFootbar>
  );
};

export default Footer;
