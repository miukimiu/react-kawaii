'use client';

import { Container, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';
import { KawaiiProps, MOODS } from 'react-kawaii';
import { COLORS } from '../../constants';
import { KawaiiListGrid } from './KawaiiListGrid';
import { KawaiiListToolbar } from './KawaiiListToolbar';

export const KawaiiList = () => {
  const colors = [...COLORS];
  const [color, setColor] = useState(colors[0]);
  const moods: string[] = [...MOODS];
  const [mood, setMood] = useState<string>('blissful');
  const [size, setSize] = useState<number[]>([240]);

  const onChangeColor = (color: any) => {
    setColor(color.hex);
  };

  return (
    <Container size="4">
      <Flex gap="4" width="100%" direction="column">
        <KawaiiListToolbar
          colors={colors}
          color={color}
          onChangeColor={onChangeColor}
          moods={moods}
          mood={mood}
          setMood={setMood}
          size={size}
          setSize={setSize}
        />
        <KawaiiListGrid color={color} mood={mood as KawaiiProps['mood']} size={size[0]} />
      </Flex>
    </Container>
  );
};
