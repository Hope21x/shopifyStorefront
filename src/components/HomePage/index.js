import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import { getAllProducts } from '../../redux/shopReducer';
import Hero from '../Hero';
import ImageText from '../ImageText';
import RichText from '../RichText';
import CustomSpinner from '../CustomSpinner';

const HomePage = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.shop);


    useEffect(() => {
        dispatch(getAllProducts())
    }, [products, dispatch])


    if (products.length === 0) {
        return <CustomSpinner />
    }
    return (
        <Box mb={20}>
            <Hero />
            <RichText
                heading='Take a luxurious bath as never before'
                text='Improve your mind, body and soul with this bath bomb'
            />
            <Grid  templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
                {
                    products.map(product => (
                        <Box role='group' position='relative' key={product.id} textAlign='center' p={['10px', '0']} w='100%' overflow='hidden'>
                            <Link to={`/products/${product.handle}`}>
                                <Image src={product.images[0].src} alt={product.handle} _hover={{ opacity: '80%', transition: ' .35s ease-out', filter: 'brightness(55%) blur(1.7px)',transform: 'scale(1.2)' }}/>

                                <Text position='absolute' top='15%' w='100%' fontWeight='bold' color='black' _groupHover={{ color: 'white' }}>
                                    {product.title}
                                </Text>


                                <Text m='auto' position='absolute' bottom='7%' fontWeight={200} bgColor='#ffffff' borderRadius={'0 10rem 10rem 0'} w='17%' color='black'>
                                    GHS {product.variants[0].price}
                                </Text>


                            </Link>
                        </Box>
                    ))
                }

            </Grid>
            <RichText
                
                heading='Just feel the magic!'
                text='Live healthy from inside and outside'

            />
            <ImageText image='/bomb1.jpg' heading='The White Bomb' text="The most magical bath you'll ever take! This exotic bath bomb features Italian bergamot, rare camellias, lily, jasmine, rose, and exotic sandalwood and vetiver. Not only does it smell and feel amazing, it also turns your bath water an incredible super dark purple color - almost black! It feels as though you're bathing a cauldron filled with magic potion!" />
            <ImageText reverse image='/bomb2.jpg' heading='The Pink Bomb' text="Enjoy our Fruit Punch Bath Bomb with fun, tropical scents of fresh bananas, juicy grapefruit, kiwi, strawberries, bubble gum, and a hint of vanilla as a base note." />
            <ImageText image='/bomb3.jpg' heading='The Blue Bomb' text="Delight your sweet tooth with buttery toffee and caramel scents, combined with the aroma of fresh vanilla beans. This moisturizing Vanilla Caramel bath bomb is the ultimate treat." />
        </Box>
    )
}

export default HomePage;
