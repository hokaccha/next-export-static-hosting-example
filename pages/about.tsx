import { FC } from "react";
import Link from "next/link";

const AboutPage: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <h1>About!</h1>
    </div>
  );
};

export default AboutPage;
