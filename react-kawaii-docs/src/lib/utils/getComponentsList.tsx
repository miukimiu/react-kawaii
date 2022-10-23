import React from "react";

const Backpack = React.lazy(
  () => import("react-kawaii/lib/components/backpack")
);
const Browser = React.lazy(() => import("react-kawaii/lib/components/browser"));
const Cat = React.lazy(() => import("react-kawaii/lib/components/cat"));
const Chocolate = React.lazy(
  () => import("react-kawaii/lib/components/chocolate")
);
const CreditCard = React.lazy(
  () => import("react-kawaii/lib/components/creditCard")
);
const Folder = React.lazy(() => import("react-kawaii/lib/components/folder"));
const Ghost = React.lazy(() => import("react-kawaii/lib/components/ghost"));
const IceCream = React.lazy(
  () => import("react-kawaii/lib/components/iceCream")
);
const Mug = React.lazy(() => import("react-kawaii/lib/components/mug"));
const Planet = React.lazy(() => import("react-kawaii/lib/components/planet"));
const SpeechBubble = React.lazy(
  () => import("react-kawaii/lib/components/speechBubble")
);

type ComponentProps = {
  color: string;
}


export const getComponentsList = ({ color }: ComponentProps) => {

  const props = { size: 140, color };

  return [
    {
      name: "Backpack",
      component: <Backpack {...props} />,
    },
    {
      name: "Browser",
      component: <Browser {...props} />,
    },
    {
      name: "Cat",
      component: <Cat {...props} />,
    },
    {
      name: "Chocolate",
      component: <Chocolate {...props} />,
    },
    {
      name: "Folder",
      component: <Folder {...props} />,
    },
    {
      name: "Ghost",
      component: <Ghost {...props} />,
    },
    {
      name: "IceCream",
      component: <IceCream {...props} />,
    },
    {
      name: "Mug",
      component: <Mug {...props} />,
    },
    {
      name: "Planet",
      component: <Planet {...props} />,
    },
    {
      name: "SpeechBubble",
      component: <SpeechBubble {...props} />,
    },
  ];
};
