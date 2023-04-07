import { MarkerType } from "reactflow";
import React from 'react';
const edgeType = 'smoothstep';
export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          <strong>Send Message</strong>On the bottom left you see the <strong>Controls</strong> and the bottom right the{' '}
          <strong>MiniMap</strong>. This is also just a node 🥳 select 1 for Painting.  select 2 for dulux.  select 3 Asian.
        </>
      ),
    },
    position: { x: 100, y: 100 },
    style: { width: 180, height: 100 },
    targetPosition:'top'

  },
  {
    id: '2',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Painting 1</strong> 🥳 <button>yes</button>.  <button>NO</button>.
        </>
      ),
    },
    position: { x: 0, y:0 }
  },
  {
    id: '3',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Dulux 2</strong> 🥳 <button>yes</button>.  <button>NO</button>.
        </>
      ),
    },
    position: { x: 0, y: 0 }
  },
  {
    id: '4',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Asian 3</strong> <button>yes</button>.  <button>NO</button>.
        </>
      ),
    },
    position: { x: 0, y: 0 }
  },
  {
    id: '5',
    type: 'default',
    data: {
      label: 'YES'
    },
    position: { x: 0, y: 0 }
  },
  {
    id: '6',
    type: 'default',
    data: {
      label: 'No'
    },
    position: { x: 0, y: 0 }
  },
];

export const initialEdges = [
  {
    id: 'e12', source: '1', target: '2', animated: false, type: edgeType,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      labelBgBorderRadius: 100
    },
    label: 'painting',
  },
  {
    id: 'e13', source: '1', target: '3', type: edgeType, animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      labelBgBorderRadius: 100
    },
    label: 'Dulux',
  },
  {
    id: 'e14', source: '1', target: '4', type: edgeType, animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      labelBgBorderRadius: 100
    },
    label: 'Asian',
  },
  {
    id: 'e15', source: '4', target: '5', type: edgeType, animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      labelBgBorderRadius: 100
    },
    label: 'y',
  },
  {
    id: 'e16', source: '4', target: '6', type: edgeType, animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      labelBgBorderRadius: 100
    },
    label: 'N',
  },
];
