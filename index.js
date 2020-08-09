function inOrder(rootNode){
  if (rootNode.left){
    inOrder(rootNode.left)
  }
}