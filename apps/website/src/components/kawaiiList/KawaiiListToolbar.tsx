'use client';

import { Flex, Select, Slider } from '@radix-ui/themes';
import { Circle } from '@uiw/react-color';
import { FC } from 'react';
import './kawaiiList.css';

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
  return (
    <Flex gap="4" position="sticky" top="0">
      <Flex direction="column" gap="1">
        <Circle colors={colors} color={color} onChange={onChangeColor as any} />
      </Flex>

      <Flex direction="column" gap="1">
        <Select.Root defaultValue={mood} onValueChange={setMood}>
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
        <Slider min={100} max={280} value={size} onValueChange={setSize} />
      </Flex>
    </Flex>
  );
};
