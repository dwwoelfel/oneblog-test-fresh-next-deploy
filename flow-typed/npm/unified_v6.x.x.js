// flow-typed signature: f2af1542ae054acf44d3946166d67132
// flow-typed version: c6154227d1/unified_v6.x.x/flow_>=v0.104.x

interface Unified$Point {
  line: mixed;
  column: mixed;
  offset?: mixed;
}

interface Unified$Position {
  start: Unified$Point;
  end: Unified$Point;
  indent?: mixed;
}

interface Unified$Data {}

interface Unified$Node {
  type: string;
  data?: Unified$Data;
  position?: Unified$Position;
}

type Done = (err: Error) => void | ((doc: mixed, extra?: mixed) => void);

declare class Unified {
  data(key: string): mixed;
  data(key: string, value: mixed): this;
  freeze(): this;
  use(plugin: mixed, options?: mixed): this;
  parse(file: mixed): Unified$Node;
  stringify(node: Unified$Node, file?: mixed): string;
  run(node: Unified$Node, file?: mixed): Promise<*>;
  run(node: Unified$Node, file: mixed, done: Done): void;
  runSync(node: Unified$Node, file?: mixed): Unified$Node;
  process(doc: mixed): Promise<*>;
  process(doc: mixed, done: Done): void;
  processSync(doc: mixed): mixed;
}

declare module "unified" {
  declare module.exports: () => Unified;
}
