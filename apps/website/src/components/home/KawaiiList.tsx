'use client';

import { Card, Container, Flex, Grid, Heading, Separator } from '@radix-ui/themes';
import { Circle } from '@uiw/react-color';
import React, { useState } from 'react';
import * as Illustration from 'react-kawaii';
import { COLORS } from '../../constants';

export const KawaiiList = () => {
  const [color, setColor] = useState(COLORS[0]);

  const onChangeColor = (color: any) => {
    setColor(color.hex);
  };

  return (
    <Container size="4" px="4">
      <Grid columns="1fr 280px" gap="4" width="100%">
        <Grid columns={{ initial: '1', md: '3', lg: '4' }} gap="4" width="auto">
          {Object.entries(Illustration).map(([illustrationName, Illustration]) => {
            if (
              typeof Illustration === 'function' &&
              React.isValidElement(<Illustration />) &&
              illustrationName !== 'MOODS'
            ) {
              return (
                <Card key={illustrationName}>
                  <Flex direction="column" align="center">
                    <Illustration size="100%" color={color} />
                    <Heading size="3">{illustrationName}</Heading>
                  </Flex>
                </Card>
              );
            }

            return null;
          })}
        </Grid>
        <Flex direction="column" gap="4" position="sticky" top="0" p="4" height="25vh">
          <Circle colors={COLORS} color={color} onChange={onChangeColor} />
          <Separator my="3" size="4" />
        </Flex>
      </Grid>
    </Container>
  );
};
