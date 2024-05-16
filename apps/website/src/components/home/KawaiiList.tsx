'use client';

import { Box, Card, Container, Flex, Grid, Heading, Separator } from '@radix-ui/themes';
import { Circle } from '@uiw/react-color';
import React, { useState } from 'react';
import * as Illustration from 'react-kawaii';
import { COLORS } from '../../constants';
import { getComponentsList } from '../../utils/getComponentsList';

export const KawaiiList = () => {
  const [color, setColor] = useState(COLORS[0]);
  const components = getComponentsList({ color });

  const onChangeColor = (color: any) => {
    setColor(color.hex);
  };

  return (
    <Flex direction="column" align="center" justify="center" gap="4" mb="8" width="100%">
      <Box>
        <Container size="3" px="4" py="4">
          <Flex direction="column" gap="4">
            <Circle colors={COLORS} color={color} onChange={onChangeColor} />
          </Flex>
        </Container>
      </Box>

      <Separator my="3" size="4" />
      <Container size="3" px="4">
        <Grid columns={{ initial: '1', md: '3', lg: '4' }} gap="3" width="auto">
          {Object.entries(Illustration).map(([illustrationName, Illustration], index) => {
            if (
              typeof Illustration === 'function' &&
              React.isValidElement(<Illustration />) &&
              illustrationName !== 'MOODS'
            ) {
              return (
                <Card>
                  <Flex direction="column" align="center">
                    <Illustration size={150} color={color} />
                    <Heading size="3">{illustrationName}</Heading>
                  </Flex>
                </Card>
              );
            }

            return null;
          })}
        </Grid>
      </Container>
    </Flex>
  );
};
