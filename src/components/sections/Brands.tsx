import Container from "../shared/Container";
import Title from "../shared/Title";

const logos = [
  { id: "discord", label: "Discord" },
  { id: "openai", label: "OpenAI" },
  { id: "paypal", label: "PayPal" },
  { id: "slack", label: "Slack" },
  { id: "spotify", label: "Spotify" },
  { id: "youtube", label: "YouTube" },
];

const Brands = () => {
  return (
    <section aria-label="Trusted brands">
      <Container className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center">
          <Title>Trusted by Industry Leaders</Title>
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          {logos.map(({ id, label }) => (
            <div
              key={id}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={`/logos/${id}.png`}
                alt={`${label} logo`}
                loading="lazy"
                className="h-7 sm:h-10 w-auto transition duration-300 ease-linear grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Brands;
