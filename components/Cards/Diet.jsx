import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Diet() {
  return (
    <Card sx={{ maxWidth: 345 }} 
    
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="/images/diet2.jpg"
          alt="green iguana"
          className="h-[200px] w-full hover:scale-110 duration-200 transition-all ease-in-out"
        />
        <CardContent className=''>
          <Typography gutterBottom variant="h5" component="div">
            The Mediterranean Diet
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This diet emphasizes the consumption of fruits, vegetables, whole grains, lean proteins (such as fish and poultry), 
          and healthy fats (such as olive oil). It also limits red meat and processed foods, 
          and includes moderate amounts of red wine.
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
        <Link href={'/diet/123'} className='cursor-pointer'>
        <Button size="small" variant='contained'  className='bg-gray-900 w-full'>
          Explore Plan
        </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
