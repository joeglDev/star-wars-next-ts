import { HeadingOne } from '@/components/Headings/HeadingOne';
//paragraph content
//link to wiki swapi etc
//nav bar links for each page

export default function Home() {
  const headingContent = ['Star Wars: A quick guide by ', <a rel={"noreferrer"} target='_blank' href='https://github.com/joeglDev'>Joe Gilbert</a>];
  return (
    <>
    <HeadingOne content={headingContent}></HeadingOne>
    </>
  )
    
}
