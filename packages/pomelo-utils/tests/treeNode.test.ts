import { describe, expect, test } from '@jest/globals';
import { TreeNode } from '../src/TreeNode';

describe('sum module', () => {
  test('tree', () => {
    const peNode = new TreeNode('pe', { data: 'test pe' });
    const footballNode = new TreeNode('football', { data: 'test football' });
    const footballShootNode = new TreeNode('footballShoot', { data: 'test footballShoot' });
    const basketballNode = new TreeNode('basketball', { data: 'test basketball' });
    const basketballShoootNode = new TreeNode('basketballShoot', { data: 'test basketballShoot' });
    const basketballDefenceNode = new TreeNode('basketballDefence', { data: 'test basketballDefence' });
    peNode.addChild(footballNode);
    peNode.addChild(basketballNode);
    footballNode.addChild(footballShootNode);
    basketballNode.addChild(basketballShoootNode);
    basketballNode.addChild(basketballDefenceNode);

    const dfsQueue: string[] = [];
    peNode.forDFS((node) => {
        dfsQueue.push(node.getName());
    })
    expect(dfsQueue).toEqual(['pe', 'football', 'footballShoot', 'basketball', 'basketballShoot', 'basketballDefence'])


    const bfsQueue: string[] = [];
    peNode.forBFS((node) => {
        bfsQueue.push(node.getName());
    })
    expect(bfsQueue).toEqual(['pe', 'football', 'basketball', 'footballShoot', 'basketballShoot', 'basketballDefence'])

    expect(peNode.getDepth()).toBe(3);

    const emptyChildrenNode = new TreeNode('empty');
    expect(emptyChildrenNode.getDepth()).toBe(1);
  });
});