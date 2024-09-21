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
    console.log(peNode.forDFS((node) => {
        console.log('n', node);
    }));
  });
});

// {
//     info: {},
//     children: {
//         aa: {
//             info: {},
//             children: {}
//         }
//     }
// }