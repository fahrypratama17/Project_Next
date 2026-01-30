import { contactListItems, formDropdownItems } from "@/data/data";
import InputField from "@/components/InputField";

const page = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div>
            <div>
              <h2 className="title">Book an Appointment</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
                vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>
            <div>
              <h3 className="card-title">More information</h3>
              <ul className="">
                {contactListItems.map((item) => (
                  <li key={item.id} className="">
                    <span>
                      <item.icon size={30} />
                    </span>
                    <div className="card-title">{item.title}</div>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form action="">
            <div>
              <InputField
                label={"Name"}
                placeholder={"Full Name"}
                type={"text"}
              />
              <InputField
                label={"Email"}
                placeholder={"email@example.com"}
                type={"email"}
              />
            </div>

            <div>
              <InputField
                label={"Phone Number"}
                placeholder={"(123)-456-8900"}
                type={"tel"}
              />

              <div>
                <label>Services</label>
                <div>
                  <select>
                    {formDropdownItems.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button className="primary-btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
