import React from 'react';
import { Link } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    VStack


} from '@chakra-ui/react';

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <Drawer isOpen={isMenuOpen} onClose={() => toggleMenu()} placement='left' size='sm'>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack p='2rem' fontFamily='Raleway' fontSize='2rem'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Learn More</Link>
                        <Link to='/'>Sustainability</Link>
                    </VStack>
                </DrawerBody>



                <DrawerFooter textAlign='center'>
                    <Text w='100%'>&copy; Copyright www.shopwithshopify.com</Text>
                </DrawerFooter>

            </DrawerContent>
        </Drawer>
    )
}

export default NavMenu
