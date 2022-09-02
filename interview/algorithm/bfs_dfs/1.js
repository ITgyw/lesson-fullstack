const root = {
    value: "A",
    left: {
        value: "B",
        left: {
            value: "D"
        },
        right: {
            value: "E"
        }
    },
    right: {
        value: "C",
        right: {
            value: "F"
        }
    }
}

// 先序排列
function preorder(root) {
    // 退出条件
    if (!root) {
        return
    }
    console.log("当前遍历的节点值是：", root.value);// D
    preorder(root.left);
    preorder(root.right);

}
function inorder(root) {
    if (!root) {
        return
    }
    inorder(root.left);
    console.log("当前遍历的节点值是：", root.value);
    inorder(root.right);
}
function postorder(root) {
    if (!root) {
        return
    }
    postorder(root.left);
    postorder(root.right);
    console.log("当前遍历的节点值是：", root.value);
}

console.log(preorder(root));
console.log(inorder(root));
console.log(postorder(root));
