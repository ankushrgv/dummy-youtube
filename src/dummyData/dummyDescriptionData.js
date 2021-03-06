export const getDummyDescription = (videoId) => {
  let newObj = {
    "id": videoId
  }
  if (videoId % 2 === 0) {
    let desc = { ...evenIdDescription, ...newObj }
    return desc
  }
  else {
    let desc = { ...oddIdDescription, ...newObj }
    return desc
  }
}

const oddIdDescription = {
  "id": 123,
  "name": "Hans Zimmer epic compilation",
  "channel": "Hans Zimmer",
  "publishDate": "May 4th 2019",
  "views": "1.2M",
  "likes": "68k",
  "dislikes": "2.2k",
  "subscribers": "90k",
  "descriptionText": `"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`
}

const evenIdDescription = {
  "id": 123,
  "name": "Max Ritcher - Best songs",
  "channel": "Max Ritcher",
  "publishDate": "July 25th 2020",
  "views": "1.2M",
  "likes": "68k",
  "dislikes": "2.2k",
  "subscribers": "90k",
  "descriptionText": `"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, `
}