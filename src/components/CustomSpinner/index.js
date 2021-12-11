import React from 'react'
import { Text, Flex } from '@chakra-ui/react'

const CustomSpinner = () => {
    return (
        <Flex position='fixed' top='0' left='0' right='0' bottom='0' zIndex='1' justifyContent='center' alignItems='center' bgColor='black' flexDir='column'>
            <Text color='white' fontSize={['2rem', '8rem']} fontFamily='hero' >
                Introducing Bath Bombs
            </Text>
            <Text color='white' fontSize={['.5rem','1rem']} fontFamily='Raleway'>
                - Hope Kumordzie
            </Text>
        </Flex>
    )
}

export default CustomSpinner
