import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material'
import { Box } from '@mui/system'

export default function Diet() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="/images/food1.jpg"
          alt="green iguana"
          className="h-[200px] w-full"
        />
        <CardContent className=''>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Box className='flex mt-3 items-center space-x-3'>
            <Avatar
              alt="Remy Sharp"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            />
            <Box>
                <h4 className='text-sm'>Chef KingKong</h4>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained'  className='bg-blue-500 w-full'>
          Explore Plan
        </Button>
      </CardActions>
    </Card>
  )
}
