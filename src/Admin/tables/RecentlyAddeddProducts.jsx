import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


import React from 'react'



const dressPage1 = [
  {
    title: "Stylish Summer Dress",
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/k/o/8/free-xl-kt-fab-mart-original-imagujp8gzfhhzjg.jpeg?q=70",
    brand: "Zara",
    discountedPrice: "$49.99",
    quantity: 100
  },
  {
    title: "Elegant Evening Gown",
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/p/c/w/free-m-zestflavours-original-imagp3gfhzfmz8gz.jpeg?q=70", 
    brand: "H&M",
    discountedPrice: "$79.99",
    quantity: 75
  },
  {
    title: "Casual Cotton Dress",
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/y/4/u/free-s-mesh-clothing-co-original-imagp3g5z5hgzhhg.jpeg?q=70",
    brand: "Forever 21",
    discountedPrice: "$29.99",
    quantity: 150
  },
  {
    title: "Floral Maxi Dress",
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/n/u/5/free-l-shefos-original-imagqngj9hgzfzkt.jpeg?q=70",
    brand: "ASOS",
    discountedPrice: "$59.99",
    quantity: 50
  },
  {
    title: "Party Cocktail Dress", 
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/o/s/z/free-m-varni-by-lakshita-original-imagr2g7zpyjhwzx.jpeg?q=70",
    brand: "Mango",
    discountedPrice: "$89.99",
    quantity: 30
  }
]

const RecentlyAddeddProducts = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card>
       <CardHeader
          title='Recently Added Products'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}} onClick={() => navigate('/admin/products')}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
             <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
           <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
             <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dressPage1.slice(0,5).map(item => (
            <TableRow hover key={item.title} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
             <TableCell> <Avatar alt={item.title} src={item.imageUrl} /> </TableCell>
             
              <TableCell sx={{ py: `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{item.title}</Typography>
                  <Typography variant='caption'>{item.brand}</Typography>
                </Box>
              </TableCell>
              <TableCell>{"dress"}</TableCell>
              <TableCell>{item.discountedPrice}</TableCell>
              <TableCell>{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}

export default RecentlyAddeddProducts
