import { describe, expect, test } from '@jest/globals';
import { Node } from '../src/Node';

describe('sum module', () => {
  test('tree', () => {
    const testName = 'jack';
    const testInfo = { age: '35', job: 'fe' };
    const node = new Node(testName, testInfo);
    expect(node.getName()).toBe(testName);
    expect(node.getInfo()).toEqual(testInfo);


    const emptyInfoNode = new Node(testName);
    expect(emptyInfoNode.getInfo()).toEqual({});
  });
});