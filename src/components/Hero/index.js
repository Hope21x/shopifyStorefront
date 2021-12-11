import React from 'react'
import { motion } from 'framer-motion';
import { Box, Image, Center, Button, Text } from '@chakra-ui/react'
import { heroContainerAnimate, heroTextAnimate } from '../ImageText';

const MotionBox = motion(Box);
const MotionText = motion(Text)
const MotionButton = motion(Button)



const Hero = () => {
    return (
        <MotionBox initial='hidden' animate='show' variants={heroContainerAnimate} bgColor='#f7a4a4' w='100%' position='relative' h={['45vh', '55vh']} >
            <Box position='relative' top={[-40, -32]}>
                <Image h='35rem' objectFit='contain' objectPosition={['top', 'center']} m='auto' src={'/bathbomb.png'} />

            </Box>
            <MotionText variants={heroTextAnimate} color='white' fontWeight='900' fontFamily='hero' fontSize={['3.5rem', '4rem']} textAlign='center' position='absolute' bottom='28%' w='100%'>
                Introducing Bombastic Bathing
            </MotionText>
            <Center>
                <MotionButton variants={heroTextAnimate} w='10rem' bgColor='#FF38BD' color='white' position='absolute' bottom='15%'  _hover={{bgColor: 'pink.700' }} >Shop Now</MotionButton>
            </Center>
        </MotionBox>
    )
}

export default Hero;
