import { Fragment } from 'react';

import { StackProps } from '@chakra-ui/layout/dist/stack/stack';
import { HStack, Text } from '@chakra-ui/react';
import { range } from 'lodash-es';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/all';

export interface Props extends StackProps {
    length?: number;
    value?: number;
}

export const Rating = ({ value = 0, length = 5, ...props }: Props): JSX.Element => {
    const isInt = (value + 1) % 1 === 0;

    return (
        <HStack spacing={3} {...props}>
            <Text fontWeight="600">{value}</Text>

            <HStack spacing={1} color="yellow.500">
                {range(length).map(index => {
                    const position = index + 1;

                    const isFilledStar = position <= value;
                    const isHalfStar = !isInt && position === Math.ceil(value);

                    return (
                        <Fragment key={index}>
                            {isFilledStar ? <BsStarFill /> : isHalfStar ? <BsStarHalf /> : <BsStar />}
                        </Fragment>
                    );
                })}
            </HStack>
        </HStack>
    );
};
