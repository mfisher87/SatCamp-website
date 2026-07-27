import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";


export function ThemesSection(props: {dark: boolean}) {
  return (
    <Section dark={props.dark} id="themes">
      <LeftColumn>
        <SectionTitle>Theme</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle>Last Mile of Geo</SubSectionTitle>
        <List>
          <Item>What is needed to take our geospatial work that "last mile" to make a meaningful impact?</Item>
          <Item>In your sector, what does the "last mile" look like?</Item>
          <Item>Why is the "last mile" hard, and why do we sometimes lose sight of it?</Item>
        </List>
      </RightColumn>
    </Section>
  );
}
