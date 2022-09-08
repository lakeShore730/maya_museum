import Container from "../components/ui/container";
import Header from "../components/common/header";
import Navigation from "../components/common/navigation";
import Footer from "../components/common/footer";

const AppLayout = (props) => {
  const { children, ...others } = props;

  return (
    <div>
      <Container>
        <Header className="pt-8" />
      </Container>
      <div className="sticky top-0 bg-white z-10">
        <Container>
          <Navigation className="mt-8 py-5" />
        </Container>
      </div>
      <Container>
        <div {...others}>{children}</div>
        <Footer />
      </Container>
    </div>
  );
};

export default AppLayout;
