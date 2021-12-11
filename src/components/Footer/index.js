import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'


const Footer = () => {
    return (
        <Box bgColor='#A4D0D1C7' position='relative' bottom={0} >
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}>
                <Box>
                    <Image h={300}  src={'https://res.cloudinary.com/hope21x/image/upload/v1639001752/bathbombs-2048px-3_neun9i.jpg'} />
                </Box>
                <VStack m='auto' color='gray.500'>
                    <Link to='/'>The Green Blast</Link>
                    <Link to='/'>The Blue Berry</Link>
                    <Link to='/'>The Yellow Mellow</Link>
                </VStack>
                <VStack m='auto' color='gray.500'>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Learn More</Link>
                    <Link to='/'>Sustainability</Link>
                </VStack>

            </Grid>
            <Box>
                <Text textAlign='center' color='white' w='100%' borderTop='1px solid white'>&copy; Copyright www.shopwithshopify.com</Text>
            </Box>
        </Box>
    )
}

export default Footer
