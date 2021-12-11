import React, { useState } from 'react'
import { Flex, Icon, Image, Box, Badge } from '@chakra-ui/react'
import { VscMenu } from 'react-icons/vsc'
import { BsBasket } from 'react-icons/bs'
import { toggleOpenCart } from '../../redux/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavMenu from '../NavMenu'


const NavBar = () => {
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }
    const { checkout } = useSelector((state) => state.cart)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch()
    return (
        <Flex bgColor='#f7a4a4' flexDirection='row' justifyContent='space-between' p='4'>
            <Icon top={10} position='relative' onClick={() => toggleMenu()} cursor='pointer' fill='white' as={VscMenu} boxSize={30} />
            <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Link to='/'><Image h={200} w='100%' objectFit='contain' src={'/index.png'} /></Link>
            <Box>
                <Icon top={10} position='relative' onClick={() => dispatch(toggleOpenCart())} cursor='pointer' as={BsBasket} fill='white' boxSize={30} />
                <Badge right='6' top='10' position='absolute' color='white' p='4px' bgColor='#FF38BD' borderRadius='100%'>{checkout.lineItems?.length }</Badge>
            </Box>
        </Flex>
    )
}

export default NavBar
