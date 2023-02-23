import { v4 as uuidv4 } from "uuid"

const samples = [
  {
    id: uuidv4(),
    title: '問題集１',
    questions: [
      {
        id: uuidv4(),
        desc: '好きな食べ物は',
        answer: false,
      },
      {
        id: uuidv4(),
        desc: '好きなおやつは',
        answer: false,
      },
      {
        id: uuidv4(),
        desc: '好きなゲームは',
        answer: false,
      }
    ],
  },
  {
    id: uuidv4(),
    title: '問題集２',
    questions: [
      {
        id: uuidv4(),
        desc: 'すきなゲームは',
        answer: false,
      },
      {
        id: uuidv4(),
        desc: 'すきなゲームは',
        answer: false,
      },
    ],
  }
]

export default samples