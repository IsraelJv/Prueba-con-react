import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="../../public/img/rick-and-morty-relax.png"
        title="Imagen Rick y Morty"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Héctor Israel Jaime Villanueva
        </Typography>
        <Typography variant="body1" color="text.secondary">
            correo@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Estoy aquí de tranquis probando como funciona esta wea llamada React.
        </Typography>
      </CardContent>
    </Card>
  );
}