// src/data.ts

export interface User {
  id: number
  name: string
  email: string
  avatar: string
}

export interface Product {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
}

export interface Post {
  id: number
  title: string
  content: string
  author: string
}

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    avatar: 'https://via.placeholder.com/150'
  }
  // 추가 사용자 정보...
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone',
    price: 699.99,
    description: 'A high-end smartphone with a great camera.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Laptop',
    price: 1299.99,
    description: 'A powerful laptop for work and play.',
    imageUrl: 'https://via.placeholder.com/150'
  }
  // 추가 제품 정보...
]

export const posts: Post[] = [
  {
    id: 1,
    title: 'Tailwind CSS Guide',
    content: 'Learn how to use Tailwind CSS in your React projects.',
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'React Best Practices',
    content: 'Tips and tricks for writing clean and efficient React code.',
    author: 'Jane Smith'
  }
  // 추가 게시물 정보...
]

export function makeArray(size: number): number[] {
  return Array.from({length: size}, (_, i) => i + 1)
}

export function randomParagraphs(num: number): string {
  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  return Array(num).fill(paragraph).join('\n\n')
}

export function randomSentence(): string {
  return 'Sample sentence for demonstration.'
}

export function randomTitleText(): string {
  return 'Sample Title'
}

export function randomName(): string {
  return 'Sample Name'
}

export function randomDayMonthYear(): string {
  return '01 January 2024'
}

export function randomRelativeDate(): string {
  return '1 day ago'
}
