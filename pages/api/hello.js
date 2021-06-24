// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let x =   
[
  {
    "id": "1",
    "name": "item A",
    "details" : "loremm lorem",
    "price" : "$xx.xx",
    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/1200px-LetterA.svg.png"
  },
  {
    "id": "2",
    "name": "item B",
    "details" : "loremm lorem ipsum",
    "price" : "$yy.yy",
    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/1200px-LetterB.svg.png"
  }
]

export default (req, res) => {
  res.status(200).json(x)
}
