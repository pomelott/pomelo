import { Node } from './Node';
import { TTreeNodeCallBack } from './types';

export class TreeNode extends Node {
    private children: Record<string, TreeNode>;
    private seqQueue: string[];
    private depth: number;

    constructor (name: string, info?: Record<string, any>) {
        super(name, info);
        this.children = {};
        this.seqQueue = [];
    }

    addChild (node: TreeNode) {
        const name = node.getName();
        this.children[name] = node;
        this.seqQueue.push(name);
    }

    getDepth (): number {
        this.forDFS();
        return this.depth;
    }

    forDFS (callback?: TTreeNodeCallBack) {
        const dfs = (node, dep) => {
            if (!node) {
                return dep;
            }
            if (callback) {
                callback(node);
            }
            let maxDepth = dep;
            Object.keys(node?.children || [])?.forEach((key) => {
                const currNode = node.children[key];
                maxDepth = Math.max(maxDepth, dfs(currNode, dep + 1));
            })
            return maxDepth;
        }
        this.depth = dfs(this, 1);
    }

    forBFS (callback) {
        const bfs = (root) => {
            if (!root) {
                return;
            }
            const queue = [root];
            while (queue.length) {
                const currNode = queue.shift();
                if (callback) {
                    callback(currNode);
                }
                const children = currNode.children;
                Object.keys(children).forEach(key => {
                    queue.push(children[key]);
                })  
            }
        }
        bfs(this);
    }
}