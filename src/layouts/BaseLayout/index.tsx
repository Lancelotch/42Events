import { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import Footer from "./Footer";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
      }}
    >
      {children}
      <Footer />
    </Box>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
