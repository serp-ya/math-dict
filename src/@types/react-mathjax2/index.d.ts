/// <reference types="node" />

declare module 'react-mathjax2' {
  import * as React from 'react';
  export class Context extends React.Component<any> {};
  export class Node extends React.Component<{ inline?: boolean }> {};
}
