import { RiContactsBookFill } from 'react-icons/ri';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import {
  Container,
  Section,
  Title,
} from 'components/base styles/CommonStyle.styled';

const Home = () => {
  return (
    <Container>
      <Section margin="calc(10%) 0 0 0">
        <Title size="35px" margin="0 0 20px 0" position="center">
          <RiContactsBookFill size={20} fill="rgb(10 10 130)" />
          <b> Phonebook</b>
        </Title>
        <AuthMenu />
      </Section>
    </Container>
  );
};

export default Home;