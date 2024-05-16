'use client';
import { Button, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export type MotionButtonProps = Omit<ButtonProps, 'transition'>;

// Workaround to get the right motion types for Chakra Box: https://github.com/chakra-ui/chakra-ui/issues/1814#issuecomment-1027517824
export const MotionButton = motion<MotionButtonProps>(Button);
