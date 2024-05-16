import React from "react";
import * as Kawaii from "react-kawaii";

type ComponentProps = {
  color: string;
}

export const getComponentsList = ({ color }: ComponentProps) => {

  const props = { size: 140, color };

  return [
    {
      name: "Backpack",
      component: <Kawaii.Backpack {...props} />,
    },
    {
      name: "Browser",
      component: <Kawaii.Browser {...props} />,
    },
    {
      name: "Cat",
      component: <Kawaii.Cat {...props} />,
    },
    {
      name: "Chocolate",
      component: <Kawaii.Chocolate {...props} />,
    },
    {
      name: "Folder",
      component: <Kawaii.Folder {...props} />,
    },
    {
      name: "Ghost",
      component: <Kawaii.Ghost {...props} />,
    },
    {
      name: "IceCream",
      component: <Kawaii.IceCream {...props} />,
    },
    {
      name: "Mug",
      component: <Kawaii.Mug {...props} />,
    },
    {
      name: "Planet",
      component: <Kawaii.Planet {...props} />,
    },
    {
      name: "SpeechBubble",
      component: <Kawaii.SpeechBubble {...props} />,
    },
  ];
};
