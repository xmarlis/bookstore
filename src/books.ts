export let books: IBook[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
    description:
      'A novel set in the Jazz Age that examines the American dream and social upheaval.',
    image:
      'https://cdn.pixabay.com/photo/2024/02/01/08/36/ai-generated-8545523_1280.png',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 8.99,
    description:
      'A story about racial injustice and moral growth in the American South.',
    image:
      'https://cdn.pixabay.com/photo/2021/11/11/11/11/to-do-6786046_640.png',
  },
  {
    title: '1984',
    author: 'George Orwell',
    price: 9.99,
    description:
      'A dystopian novel that explores surveillance, totalitarianism, and individual freedom.',
    image:
      'https://cdn.pixabay.com/photo/2023/04/09/22/36/george-orwell-7912424_1280.png',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 12.99,
    description:
      'A classic romance novel that critiques the British landed gentry at the end of the 18th century.',
    image:
      'https://cdn.pixabay.com/photo/2022/04/21/09/53/pride-month-7147107_1280.png',
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    price: 11.99,
    description:
      'The narrative of Captain Ahabs obsessive quest to defeat the white whale, Moby Dick.',
    image: 'https://cdn.pixabay.com/photo/2014/04/03/10/50/book-311434_640.png',
  },
];

export interface IBook {
  title: string;
  author: string;
  price: number;
  description?: string;
  image: string;
  quantity?: number;
}
