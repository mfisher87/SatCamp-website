import {
  SectionTitle,
  SubSectionTitle,
  Section,
  List,
  Item,
  LeftColumn,
  RightColumn,
} from "./sections";

export function SessionsSection(props: {dark?: boolean}) {
  return (
    <Section dark={props.dark} id="sessions">
      <LeftColumn>
        <SectionTitle>Sessions</SectionTitle>
      </LeftColumn>
      <RightColumn>


        <SubSectionTitle>Sign up!</SubSectionTitle>
        
        <p>
          Please fill out our <a className="underline underline-offset-2" href="https://docs.google.com/forms/d/e/1FAIpQLSciLlkYU89GdCJjyA-9aRT9MDqcymOyRoId3bUhpap0q_pJHQ/viewform">interest form</a> if you&apos;d like to present in our Lightning Talks or Show & Tell sessions!
        </p>


        <SubSectionTitle>Lightning Talks</SubSectionTitle>

        <p>
          SatCamp Lightning Talks are an <a className="underline underline-offset-2" href="https://www.ignitetalks.io/about">Ignite-style</a> presentation format designed to challenge presenters to be creative through several constraints:
        </p>
        <br/>

        <List>
          <Item>5 minute talk length.</Item>
          <Item>
            20 slides.
            Visuals/imagery encouraged!</Item>
          <Item>
            15 seconds per slide.
            Slides will auto-advance, so you'll be challenged to design your presentation to be concise and engaging!
          </Item>
        </List>

        <p>
          Lightning Talks are meant to be fun and informal.
          If you're looking for inspiration, you can see <a className="underline underline-offset-2" href="#lightning">examples of previous lightning talks</a> below.
        </p>


        <SubSectionTitle>Show & Tell</SubSectionTitle>

        <p>
          Show & Tell is new at SatCamp 2026!
          This science-fair-style format provides space for presenters to allow the audience to interact with their work.
          Bring your laptop and/or other equipment!
        </p>


        <SubSectionTitle>Panel: The Last Mile of Geo</SubSectionTitle>

        <p>TODO: Description text here</p>
        <br/>

        <List>
          <Item>Jason Setzer, head of product at Hydrosat</Item>
          <Item>Jon Saints, Air Programs at Waste Management, former CTO of BlueSky</Item>
          <Item>Shay Har-Noy, Managing Director at Tech Stars</Item>
          <Item>Paige Holland-Thielen, Spacecraft operations at Muon</Item>
        </List>


        <SubSectionTitle>Panel: Where's Your Line?

        <p>TODO: Description text here</p>
        <br/>

        <List>
          <Item>TODO:</Item>
          <Item>Panelists</Item>
          <Item>Here</Item>
        </List>

      </RightColumn>
    </Section>
  );
}
