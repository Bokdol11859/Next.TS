import tw from 'twin.macro';

const Home = () => {
  return (
    <Container>
      <TestDiv>Hello</TestDiv>
    </Container>
  );
};

const Container = tw.div`flex h-full w-full items-center justify-center bg-amber-300`;

const TestDiv = tw.div`text-xl text-[#ffffff]`;

export default Home;
