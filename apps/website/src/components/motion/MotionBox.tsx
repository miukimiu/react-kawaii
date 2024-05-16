'use client';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export type MotionBoxProps = Omit<BoxProps, 'transition'>;

// Workaround to get the right motion types for Chakra Box: https://github.com/chakra-ui/chakra-ui/issues/1814#issuecomment-1027517824
export const MotionBox = motion<MotionBoxProps>(Box);
