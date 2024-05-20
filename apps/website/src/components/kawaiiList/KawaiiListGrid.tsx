'use client';

import { Box, Card, Flex, Grid, Heading, Link } from '@radix-ui/themes';
import { FC, isValidElement } from 'react';
import { TbCode } from 'react-icons/tb';
import * as Illustration from 'react-kawaii';
import { KawaiiProps } from 'react-kawaii';
import { KawaiiListDialog } from './KawaiiListDialog';
import './kawaiiListGrid.css';

type KawaiiListGrid = {
  color: string;
  mood: string;
  size: number;
};

export const KawaiiListGrid: FC<KawaiiListGrid> = ({ color, mood, size }) => {
  return (
    <>
      <Grid
        className="kawaiiListGrid"
        columns={{ initial: '1', xs: '2', sm: '3', lg: '4' }}
        gap="4"
        width="100%"
        pb="8"
      >
        {Object.entries(Illustration).map(([illustrationName, Illustration]) => {
          if (typeof Illustration === 'function' && isValidElement(<Illustration />) && illustrationName !== 'MOODS') {
            return (
              <KawaiiListDialog key={illustrationName} title={illustrationName} kawaiiProps={{ size, mood, color }}>
                <Link key={illustrationName} className="kawaiiListGridCard">
                  <Card>
                    <Flex direction="column" align="center" width="100%" gap="2">
                      <Box className="kawaiiListGridCard__img">
                        <Illustration className="kawaii" color={color} mood={mood as KawaiiProps['mood']} size={size} />
                      </Box>

                      <Heading size="3" weight="medium" color="gray">
                        {illustrationName}
                      </Heading>

                      <TbCode className="kawaiiListGridCard_openModal" size={24} />
                    </Flex>
                  </Card>
                </Link>
              </KawaiiListDialog>
            );
          }

          return null;
        })}
      </Grid>
    </>
  );
};
