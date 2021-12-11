import React, {useEffect} from 'react';
import { Box, Text, Heading, Center } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { heroContainerAnimate } from '../ImageText';
import { heroTextAnimate } from '../ImageText';

const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const RichText = ({heading, text}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('show');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView])
    return (
        <MotionBox variants={heroContainerAnimate} p='4rem' animate={controls} ref={ref}>
            <Center display='flex' textAlign='center' flexDir='column'>
                <MotionHeading fontFamily='title' py='2rem' variants={heroTextAnimate}> 
                    {heading && heading}
                </MotionHeading>
                <MotionText pb='2rem' variants={heroTextAnimate}>
                    {text && text}
                </MotionText>
            </Center>
        </MotionBox>
    )
}

export default RichText
