import React from 'react';
import {AppBar, Link, Typography, Container, Toolbar} from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth='xl'>
        <Toolbar>
        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
          <Link href="/" color="inherit"  underline="none">
            Гостевая книга
          </Link>
        </Typography>
        <Typography variant="h6" component="div" >
          <Link href="/new-message" color="inherit"  underline="none">
            Добавить отзыв
          </Link>
        </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

