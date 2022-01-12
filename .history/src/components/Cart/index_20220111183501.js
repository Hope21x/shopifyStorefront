import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Image,
    Link,
    Box,

} from '@chakra-ui/react';

import { useSelector } from 'react-redux'
import { toggleCloseCart, removeLineItems } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'
import { CloseIcon } from '@chakra-ui/icons'





const Cart = () => {
    const dispatch = useDispatch()
    const { checkout, isCartOpen } = useSelector((state) => state.cart);
    const checkoutUrl = checkout.webUrl;


    return (
        <>
            <Drawer
                isOpen={isCartOpen}
                placement='right'
                onClose={() => dispatch(toggleCloseCart())}
                size='sm'


            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Shopping Cart</DrawerHeader>
                    <DrawerBody>
                        {
                            checkout.lineItems?.length ? checkout.lineItems.map(({ title, id, variant }) => (
                                
                                <>
                                    <Grid templateColumns='repeat(4, 1fr)' gap={2} key={id}>
                                        <Flex alignItems='center' justifyContent='center'>

                                            <CloseIcon boxSize={5} cursor='pointer' onClick={() => {
                                                const checkoutId = checkout.id;
                                                const removeLineItemsObj = { checkoutId: checkoutId, id: id }
                                                dispatch(removeLineItems(removeLineItemsObj))
                                            }} />

                                        </Flex>


                                        <Flex alignItems='center' justifyContent='center' boxSize={100} m={5}>
                                            <Image objectFit='fill' src={variant.image.src} overflow='hidden' />
                                        </Flex>
                                        <Flex alignItems='center' justifyContent='center'>
                                            <Text>{title}</Text>
                                        </Flex>
                                        <Flex alignItems='center' justifyContent='center'>
                                            <Text>{variant.price}</Text>
                                        </Flex>
                                    </Grid>
                                </>

                            )) :
                                (
                                    <Box h='100%' w='100%'>
                                        <Text h='100%' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                                            Your Cart Is Empty!
                                        </Text>
                                    </Box>
                                )


                        }
                    </DrawerBody>

                    {
                        checkout.lineItems?.length ?
                            (
                                <DrawerFooter w='100%'>
                                    <Button w='100%' color='gray.700' bgColor='#f7a4a4'><Link href={checkoutUrl}>Checkout</Link></Button>
                                </DrawerFooter>
                            ) : null
                    }
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart
