import { Heading } from "@/components/Headings/Heading";
import styles from "@/components/Headings/Heading.module.css";
import { TextBody } from "@/components/TextBody/TextBody";
//paragraph content
//link to wiki swapi etc
//nav bar links for each page

export default function Home() {
  const headingContent = [
    "Star Wars: A quick guide by ",
    <a
      className={styles.a}
      rel={"noreferrer"}
      target="_blank"
      href="https://github.com/joeglDev"
    >
      Joe Gilbert
    </a>,
  ];
  const whatIsText = [`Hi, This website takes displays information fetched from the Star Wars API in a dynamic manner. I built this site using Next.JS with TypeScript in order to enhance my knowledge of this framework. Sadly, the API only contains information on the 3 original Star Wars films and the prequel trilogy. Therefore this site does not display any information on the Star Wars spin offs, sequel trilogy or TV shows such as 'The Mandolorian.'`];
  const whatIsStarWars = [`From starwars.fandom wiki: Star Wars is a multi-genre mythology and multimedia franchise created by George Lucas in 1976. Comprising movies, novels, comics, video games, toys, and numerous television series, the Star Wars franchise employs archetypal motifs common to religions, classical mythology, and political climax, as well as musical motifs of those same aspects. 
  As one of the foremost examples of the space opera subgenre of science fiction, Star Wars has become part of mainstream popular culture, as well as being one of the highest-grossing series of all time`];
  const headingContentWhatIsStarWars = ['What is Star Wars?'];
  return (
    <>
      <Heading content={headingContent} hierarchy={1}></Heading>
      <TextBody content={whatIsText}></TextBody>
      <Heading content={headingContentWhatIsStarWars} hierarchy={2}></Heading>
      <TextBody content={whatIsStarWars}></TextBody>
    </>
  );
}
