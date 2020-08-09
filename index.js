function inOrder(rootNode){
  if (rootNode.left){
    inOrder(rootNode.left);
  };

  console.log(rootNode.data);

  if (rootNode.right){
    inOrder(rootNode.right)
  }
}
