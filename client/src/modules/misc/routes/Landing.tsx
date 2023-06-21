import { Link } from "react-router-dom";
import Button from "../../common/components/elements/Button";
import { Container } from "../../common/components/layout/Container";

export const Landing = () => {
  return (
    <section className="p-2">
      <Container className="bg-black/10 flex flex-col items-center gap-6 rounded-md p-8">
        <h1 className="text-5xl">Welcome to the Sample App</h1>
        <p className="text-black/50">
          This is the home page of this sample app. Sign up to to see magic!
        </p>
        <Link to="/auth/signup">
          <Button>Sign up now!</Button>
        </Link>
      </Container>
    </section>
  );
};
