import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Box, Grid, Image, Heading, Text, Button } from '@chakra-ui/react';
import { getLineItems } from '../../redux/cartReducer';
import { Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { heroContainerAnimate, heroTextAnimate, imageAnimate } from '../ImageText';
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProductPage = () => {
    function addToCart(variants) {
        const checkoutId = checkout.id
        const lineItems = [{ variantId: variants[0].id, quantity: 1 }]
        const checkoutIdLineItemsObj = { checkoutId, lineItems }
        dispatch(getLineItems(checkoutIdLineItemsObj));
    }
    const { checkout } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const { handle } = useParams();
    useEffect(() => {
        const getProductByHandle = async () => {
            const singleProduct = await client.product.fetchByHandle(handle);
            return setProduct([singleProduct]);

        }
        getProductByHandle()
    }, [handle])


    if (product.length === 0) {
        return <Box h='100vh' display='flex' flexDir='column' justifyContent='center' alignItems='center'><Spinner thickness='8px' size='xl' speed='0.55s' emptyColor='gray.200' color='pink.500' /></Box>
    }


    return (
        <>

            {
                product.map(({ title, images, variants, description, id }) => (
                    <>
                        <MotionBox variants={heroContainerAnimate} key={id} p='2rem' initial='hidden' animate='show'>
                            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m='auto'>

                                <Flex h='auto' minW='100%' justifyContent='center' p={[0, 4, 6, 8]}>
                                    <MotionImage variants={imageAnimate} borderRadius={15} objectFit={['contain', '']} src={images[0].src} />
                                </Flex>

                                <Flex flexDir='column' alignItems='center' mt={['0', '7rem']}>
                                    <MotionHeading variants={heroTextAnimate} pb='2rem'>{title}</MotionHeading>
                                    <MotionText variants={heroTextAnimate} pb='1rem' fontWeight='thin'>GHS {variants[0].price}</MotionText>
                                    <MotionText variants={heroTextAnimate} maxW={500} pb='2rem'>{description}</MotionText>
                                    <MotionButton variants={heroTextAnimate} color='white' bgColor='pink.400' w='10rem' _hover={{ bgColor: 'pink.600' }}
                                        onClick={() => addToCart(variants)}
                                    >Add To Cart</MotionButton>
                                </Flex>

                            </Grid>
                        </MotionBox>
                    </>
                ))
            }

        </>
    )
}

export default ProductPage
