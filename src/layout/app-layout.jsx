import { Fragment } from "react";
import cn from "classnames";
import Container from "../components/ui/container";
import Header from "../components/common/header";
import Navigation from "../components/common/navigation";
import MobileNavigation from "../components/common/mobile-navigation";
import Footer from "../components/common/footer";
import useWindowSize from "../utils/use-window-size";

const AppLayout = (props) => {
  const { children, ...others } = props;
  const { width } = useWindowSize();

  return (
    <div>
      {width < 1024 ? (
        <Container className="fixed top-0 z-10 bg-[#fcfcfc]">
          <MobileNavigation className="py-[8px]" />
        </Container>
      ) : (
        <Fragment>
          <Container>
            <Header className="pt-8" />
          </Container>
          <div className="sticky top-0 bg-[#fcfcfc] z-10">
            <Container>
              <Navigation className="mt-8 py-5" />
            </Container>
          </div>
        </Fragment>
      )}

      <Container
        className={cn({
          "mt-[75px]": width < 1024,
        })}
      >
        <div {...others}>{children}</div>
        <Footer />
      </Container>
    </div>
  );
};

export default AppLayout;
