import { SVGProps, FunctionComponent } from 'react';

declare const MOODS: readonly ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"];
declare const DEFAULT_PROPS: {
    readonly size: 240;
    readonly mood: "blissful";
    readonly color: "#FFD882";
};
declare const PROPS_DATA: ({
    name: string;
    type: string;
    description: string;
    default: 240;
} | {
    name: string;
    type: string;
    description: string;
    default: "#FFD882";
} | {
    name: string;
    type: string;
    description: string;
    default: "blissful";
})[];

type KawaiiMood = (typeof MOODS)[number];
type KawaiiProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
    mood?: KawaiiMood;
};

declare const Astronaut: FunctionComponent<KawaiiProps>;

declare const Backpack: FunctionComponent<KawaiiProps>;

declare const Browser: FunctionComponent<KawaiiProps>;

declare const Cat: FunctionComponent<KawaiiProps>;

declare const Chocolate: FunctionComponent<KawaiiProps>;

declare const CreditCard: FunctionComponent<KawaiiProps>;

declare const Cyborg: FunctionComponent<KawaiiProps>;

declare const File: FunctionComponent<KawaiiProps>;

declare const Folder: FunctionComponent<KawaiiProps>;

declare const Ghost: FunctionComponent<KawaiiProps>;

declare const HumanCat: FunctionComponent<KawaiiProps>;

declare const HumanDinosaur: FunctionComponent<KawaiiProps>;

declare const IceCream: FunctionComponent<KawaiiProps>;

declare const Mug: FunctionComponent<KawaiiProps>;

declare const Planet: FunctionComponent<KawaiiProps>;

declare const SpeechBubble: FunctionComponent<KawaiiProps>;

export { Astronaut, Backpack, Browser, Cat, Chocolate, CreditCard, Cyborg, DEFAULT_PROPS, File, Folder, Ghost, HumanCat, HumanDinosaur, IceCream, type KawaiiProps, MOODS, Mug, PROPS_DATA, Planet, SpeechBubble };
