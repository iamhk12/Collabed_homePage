
import Left from "./Left";
import Form from "./Form";
const Contactus = () => {
  return (
    <div>
      <div className="container-cont">
        <main className="row">
          {/* Left Section */}
          <section className="col left">
            <Left/>
          </section>
          {/* Right Section */}
          <section className="col right">
            {/* Form starts */}
            <Form/>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Contactus;


