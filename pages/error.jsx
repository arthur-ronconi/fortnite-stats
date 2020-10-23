import Hero from "../sections/hero";

export default function Error() {
  return (
    <div>
      <Hero link={true} />
      <div className="container">
        <p className="h1">Sorry :(</p>
        <p className="h4">
          We couldn't find the user you're looking for. <br />
        </p>
      </div>
    </div>
  );
}
