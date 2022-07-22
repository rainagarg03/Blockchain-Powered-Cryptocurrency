const lightningHash = (data) => {
  return "#" + data + "#";
}
class Block {
  constructor(data, hash, lastHash){
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}


const newBlock = new Block("new-data", "new-hash", lightningHash("data"))
console.log(newBlock);

