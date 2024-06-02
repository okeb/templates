import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AirbnbReviewEmailProps {
  username?: string;
  // authorImage?: string;
  message?: string;
}

const now = Date.now()
const formatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
const dateTimeString = formatter.format(now);

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

export const ContactFromEmail = ({
  username,
  // authorImage,
  message,
}: AirbnbReviewEmailProps) => {
  const previewText = `Lire le message de ${username}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 16 16" className="inline-flex mr-2 -mt-2 mb-5"><g fill="#2191fb"><path d="M5 13h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5z"></path><path d="M6 2v.341C3.67 3.165 2 5.388 2 8v1.191l-1.17.585A1.5 1.5 0 0 0 0 11.118V13.5A1.5 1.5 0 0 0 1.5 15h1c.456.607 1.182 1 2 1h7c.818 0 1.544-.393 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.382a1.5 1.5 0 0 0-.83-1.342L14 9.191V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43a.5.5 0 1 1-.99.14a3 3 0 0 0-5.94 0a.5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"></path></g></svg>
            {/* <Img
              src={`${baseUrl}/static/airbnb-logo.png`}
              width="96"
              height="30"
              alt="Airbnb"
            /> */}
          </Section>
          {/* <Section>
            <Img
              src={authorImage}
              width="96"
              height="96"
              alt={username}
              style={userImage}
            />
          </Section> */}
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Ici, ce que {username} a écrit</Text>
              <Text style={review}>{message}</Text>
              <Text style={paragraph}>
                Le message a été envoyé le {dateTimeString}.
              </Text>
              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                Pour repondre à ce message, cliquez sur le bouton ci-dessous:
              </Text>

              <Button style={button} href="http//localhost:3000/contact">
                Repondre au message
              </Button>
            </Row>
          </Section>

          {/* <Hr style={hr} /> */}

          <Section>
            <Row>
              {/* <Text style={{ ...paragraph, fontWeight: "700" }}>
                Common questions
              </Text>
              <Text>
                <Link href="https://airbnb.com/help/article/13" style={link}>
                  How do reviews work?
                </Link>
              </Text>
              <Text>
                <Link href="https://airbnb.com/help/article/1257" style={link}>
                  How do star ratings work?
                </Link>
              </Text>
              <Text>
                <Link href="https://airbnb.com/help/article/995" style={link}>
                  Can I leave a review after 14 days?
                </Link>
              </Text> */}
              <Hr style={hr} />
              <Text style={footer}>
                Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
              </Text>
              <Link href="http://localhost:3000" style={reportLink}>
                www.lepourvoyeur.org
              </Link>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// ContactFromEmail.PreviewProps = {
//   username: "Alex",
//   authorImage: `${baseUrl}/static/airbnb-review-user.jpg`,
//   message: `“Alan was a great guest! Easy communication, the apartment was left
//     in great condition, very polite, and respectful of all house rules.
//     He’s welcome back anytime and would easily recommend him to any
//     host!”`,
// } as AirbnbReviewEmailProps;

export default ContactFromEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 20px 48px",
  width: "580px",
  maxWidth: "100%",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#2191fb",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const link = {
  ...paragraph,
  color: "#2191fb",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
