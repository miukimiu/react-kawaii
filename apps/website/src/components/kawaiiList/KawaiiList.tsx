'use client';

import { Box, Container, Flex, Grid, Heading, Select, Slider, Text } from '@radix-ui/themes';
import { Circle } from '@uiw/react-color';
import React, { useState } from 'react';
import * as Illustration from 'react-kawaii';
import { KawaiiProps, MOODS } from 'react-kawaii';
import { COLORS } from '../../constants';
import './kawaiiList.css';

export const KawaiiList = () => {
  const [color, setColor] = useState(COLORS[0]);
  const moods: KawaiiProps['mood'][] = [...MOODS];
  const [mood, setMood] = useState<KawaiiProps['mood']>('blissful');
  const [size, setSize] = useState<number[]>([240]);

  const onChangeColor = (color: any) => {
    setColor(color.hex);
  };

  return (
    <Container size="4">
      <Flex gap="8" width="100%" px="4" direction={{ initial: 'column', sm: 'row' }}>
        <Grid columns={{ initial: '1', md: '3' }} gap="4" width="100%" className="kawaiiGrid">
          {Object.entries(Illustration).map(([illustrationName, Illustration]) => {
            if (
              typeof Illustration === 'function' &&
              React.isValidElement(<Illustration />) &&
              illustrationName !== 'MOODS'
            ) {
              return (
                <Box key={illustrationName} className="kawaiiListCard">
                  <Flex direction="column" align="center" width="100%" gap="2">
                    <Box className="kawaiiListCard__img">
                      <Illustration className="kawaii" color={color} mood={mood} size={size[0]} />
                    </Box>

                    <Heading size="3" weight="regular">
                      {illustrationName}
                    </Heading>
                  </Flex>
                </Box>
              );
            }

            return null;
          })}
        </Grid>

        <Flex
          direction="column"
          gap="4"
          position="sticky"
          top="0"
          height="25vh"
          width={{ initial: '100%', sm: '220px' }}
        >
          <Heading size="4">Customize</Heading>

          <Flex direction="column" gap="1">
            <Text size="2">Color</Text>
            <Circle colors={COLORS} color={color} onChange={onChangeColor} />
          </Flex>

          <Flex direction="column" gap="1">
            <Text size="2">Mood</Text>
            <Select.Root defaultValue={mood} onValueChange={setMood as any}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Moods</Select.Label>
                  {moods.map((mood, index) => (
                    <Select.Item key={index} value={mood as any}>
                      {mood}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction="column" gap="1">
            <Text size="2">Size {size}</Text>
            <Slider min={100} max={280} value={size} onValueChange={setSize} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
