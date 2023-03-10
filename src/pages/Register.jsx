import {
    Container,
    Section,
    Title,
  } from 'components/base styles/CommonStyle.styled';
  import { RegisterForm } from 'components/RegisterForm/RegisterForm';
  import { SEO } from 'utils/SEO';
  
  const Register = () => {
    return (
      <main>
        <SEO
          title="Registration"
          description="You can register using your email"
        />
        <Container>
          <Section>
            <Title>Sign up with Email</Title>
            <RegisterForm />
          </Section>
        </Container>
      </main>
    );
  };
  
  export default Register;