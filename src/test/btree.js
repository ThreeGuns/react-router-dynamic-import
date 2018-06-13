/**
 *  Created by cl on 2018/6/12
 */

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){

    }
    insert(node){
        if(!this.root){
            return this.root = node;
        }
        let current = this.root;
        while(current){
            if(node.value < current.value){
                if(current.left){
                    current = current.left;
                    continue;
                }else{
                    current.left = node;
                    break;
                }
            }else{
                if(current.right){
                    current = current.right;
                    continue;
                }else{
                    current.right = node;
                    break;
                }
            }
        }
    }
    preOrder(node){
        if(node){
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    inOrder(node){
        if(node){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
    postOrder(node){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}

const tree = new Tree();

tree.insert(new Node(5));
tree.insert(new Node(3));
tree.insert(new Node(6));
tree.insert(new Node(4));

tree.preOrder(tree.root);
console.log(`------`);
tree.inOrder(tree.root);
console.log(`------`);
tree.postOrder(tree.root);
console.log(`------`);

//tree改造为btree
