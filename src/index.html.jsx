// https://mdbootstrap.com/docs/react/components/demo/
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Page = ({ data, environment }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />

        <title>Yeah</title>

        {/* CSS should be imported as normal */}
        <link href="./assets/css/main.css" rel="stylesheet" media="all" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Behaviours must be implemented in traditional javascript since this is a normal html after build */}
        <script src="./assets/js/index.js" type="text/javascript"></script>
      </head>

      <body>
        <>
          {/* Datastore section */}
          <section id="custom-data" data-data={JSON.stringify(data)}></section>

          <MDBContainer>
            <MDBRow>
              <MDBCol md="9">
                <ul>
                  {data.frutas.map((item, index) => (
                    <li key={index}>
                      <MDBBtn
                        id={`fruta-${index}`}
                        className="btn-fruta"
                        data-fruta={JSON.stringify(data.frutas[index])}
                      >
                        {item}
                      </MDBBtn>
                    </li>
                  ))}
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>
      </body>
    </html>
  );
};

export default Page;
