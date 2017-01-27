declare var module: any; // dangerous

interface StoryDecorator {
  (story: Function, context: { kind: string, story: string }): Object;
}

interface Story {
    add (storyName: string, callback: Function): Story;
    addDecorator (decorator: StoryDecorator): Story;
}

export function addDecorator(decorator: StoryDecorator): void;
export function linkTo(name: string, ...params: any[]): void;
export function storiesOf(name: string, module: any): Story;
export function action(name: string, ...params: any[]): any;
