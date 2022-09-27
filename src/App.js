import './App.css';
import { useState } from 'react';

import { Card, CardContent, Grid, List } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E0F2F1",
    },
  },
});
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const [contacts, setContats] = useState(contactsJSON);
  const addContact = (data) => {
    setContats([...contacts, data]);
  }
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{background:"white"}}>
      <Header />
      <Grid container spacing={2} padding={8}>
          <Grid item xs={12} md={6} position={"relative"}>
            <Box position={"sticky"} top={128}>
              <ContactForm onSubmit={addContact} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <List sx={{ width: "100%", maxWidth: 360, color: "white" }}>
                  {contacts?.map((contact, index) => (
                    <Contact data={contact} key={index} />
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Box>
    </ThemeProvider>
  );
};

export default App;
