import React, {useEffect} from 'react'
import { Box, Image, Flex, Text, Heading, Button } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';




const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

export const heroContainerAnimate = {
    show: {
        transition: {
            staggerChildren: .25
        }
    }
}
export const heroTextAnimate = {
    hidden: {
        opacity: 0,
        y: 55
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.8
        }
    }
}

export const imageAnimate = {
    hidden: {
        opacity: 0,
        x: -55
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.8
        }
    }
}


const ImageText = ({ reverse, image, heading, text }) => {
    const reverseSection = reverse ? 'row-reverse' : 'row'
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
        <MotionBox bgColor='teal.100' ref={ref} animate={controls}>
            <Flex flexDir={['column', reverseSection]} w='100%'>
                <MotionImage variants={imageAnimate} src={image} objectFit='cover' w={['100%', '50%']} />
                <MotionFlex   variants={heroContainerAnimate} w={['100%', '50%']} flexDir='column' justifyContent='center' alignItems='center' p='2rem'>
                    <MotionHeading p='2rem' variants={heroTextAnimate}>
                        {heading && heading}
                    </MotionHeading>
                    <MotionText p='2rem' maxW='30rem' variants={heroTextAnimate}>
                        {text && text}
                    </MotionText>
                    <MotionButton variants={heroTextAnimate} w='10rem' bgColor='#FF38BD' color='white' _hover={{ bgColor: 'pink.700' }}>
                        Buy Now
                    </MotionButton>
                </MotionFlex>
            </Flex>

        </MotionBox>
    )
}

export default ImageText
