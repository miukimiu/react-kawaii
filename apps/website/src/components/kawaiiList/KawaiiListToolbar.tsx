'use client';

import { DimensionsIcon } from '@radix-ui/react-icons';
import { Box, Button, ButtonProps, Card, Flex, Popover, Select, Slider, Text } from '@radix-ui/themes';
import { Circle } from '@uiw/react-color';
import { FC } from 'react';
import { TbRobotFace } from 'react-icons/tb';
import { capitalizeFirstLetter } from '~/utils/capitalizeFirstLetter';
import './kawaiiListToolbar.css';

type KawaiiListToolbar = {
  color: string;
  colors: string[];
  mood: string;
  moods: string[];
  size: number[];
  onChangeColor: (color: string) => void;
  setMood: (mood: string) => void;
  setSize: (size: number[]) => void;
};

export const KawaiiListToolbar: FC<KawaiiListToolbar> = ({
  mood,
  moods,
  color,
  colors,
  size,
  onChangeColor,
  setMood,
  setSize
}) => {
  const accentButtonColor = 'violet';
  const buttonStyles: ButtonProps = {
    variant: 'soft',
    color: accentButtonColor,
    highContrast: true
  };

  return (
    <Flex position="sticky" top="0" className="kawaiiListToolbar">
      <Card className="kawaiiListToolbar__card">
        <Flex direction="column" gap="1">
          <Popover.Root>
            <Popover.Trigger>
              <Button {...buttonStyles}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px">
                  <circle cx="50" cy="50" r="50" fill={color} />
                </svg>

                <Box
                  as="span"
                  display={{
                    initial: 'none',
                    xs: 'inline-block'
                  }}
                >
                  Color
                </Box>
              </Button>
            </Popover.Trigger>
            <Popover.Content className="kawaiiListToolbar__colorPopover">
              <Flex gap="3">
                <Circle colors={colors} color={color} onChange={onChangeColor as any} />
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </Flex>

        <Flex direction="column" gap="1">
          <Select.Root defaultValue={mood} onValueChange={setMood}>
            <Select.Trigger variant="soft" color={accentButtonColor}>
              <Flex as="span" align="center" gap="2">
                <TbRobotFace />

                <Box
                  as="span"
                  display={{
                    initial: 'none',
                    xs: 'inline-block'
                  }}
                >
                  <Text weight="medium">{capitalizeFirstLetter(mood)}</Text>
                </Box>
              </Flex>
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Moods</Select.Label>
                {moods.map((mood, index) => (
                  <Select.Item key={index} value={mood as any}>
                    {capitalizeFirstLetter(mood)}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex direction="column" gap="1">
          <Popover.Root>
            <Popover.Trigger>
              <Button {...buttonStyles}>
                <DimensionsIcon />
                <Box
                  as="span"
                  display={{
                    initial: 'none',
                    xs: 'inline-block'
                  }}
                >
                  Adjust size
                </Box>
              </Button>
            </Popover.Trigger>
            <Popover.Content width="280px">
              <Flex gap="3">
                <Slider min={100} max={280} value={size} onValueChange={setSize} />
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Card>
    </Flex>
  );
};
