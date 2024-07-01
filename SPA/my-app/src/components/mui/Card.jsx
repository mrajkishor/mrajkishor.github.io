import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

export default function MultiActionAreaCard(props) {
  const {
    title,
    desc,
    image,
    link,
    date,
    time,
    enableImg,
    vp,
    isStatic,
    keywords
  } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (isStatic) {
      window.open(link);
    } else {
      navigate("/blog/" + link, { state: vp });
    }
  }


  const getTable = () => {
    return (<TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {Object.entries(JSON.parse(desc)).map(([key, value]) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell align="left">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
  }



  return (
    <Card sx={{ width: '98%', margin: '0 1% 1% 1%' }}>
      <CardActionArea>
        {enableImg && (
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
        )}
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isStatic ? getTable() : desc}

          </Typography>
          {!isStatic && keywords ? <>

            <Typography variant="body3" color="text.secondary">{
              keywords.map((keyword, index) => (
                <Chip key={index} label={keyword} className='chip-styled' />
              ))}
            </Typography>
          </>


            : null
          }
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" display="block" gutterBottom color="text.secondary">
          {!isStatic ? `${date} @ ${time}` : ""}



        </Typography>
        <Button size="small" color="primary" onClick={handleClick}>
          {!isStatic ? "Check it" : "Link"}
        </Button>
      </CardActions>

    </Card>
  );
}
