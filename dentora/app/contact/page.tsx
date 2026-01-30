import { contactListItems, formDropdownItems } from "@/data/data";
import InputField from "@/components/InputField";

const page = () => {
  return (
    <>
      <section className="section">
        <div className="container grid items-start gap-14 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <div className="space-y-3">
              <h2 className="title">Book an Appointment</h2>
              <p className="max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
                vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="card-title mb-5">More information</h3>
              <ul className="space-y-5">
                {contactListItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="bg-primary-100 text-primary-600 flex size-12 shrink-0 items-center justify-center rounded-lg">
                      <item.icon size={30} />
                    </span>
                    <div>
                      <div className="card-title">{item.title}</div>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            action=""
            className="border-primary-200 space-y-7 rounded-lg border px-6 py-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
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

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label={"Phone Number"}
                placeholder={"(123)-456-8900"}
                type={"tel"}
              />

              <div className="grid gap-2">
                <label className="text-lg font-semibold">Services</label>
                <div className="border-primary-400 bg-primary-100/20 hover:bg-primary-100/35 rounded-lg border px-5 py-3 placeholder-gray-600">
                  <select className="h-full w-full outline-none">
                    {formDropdownItems.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-lg font-semibold">Message</label>
              <textarea
                placeholder={"please describe what service you are in."}
                className="border-primary-400 bg-primary-100/20 hover:bg-primary-100/35 h-[158px] w-full resize-none rounded-lg border px-5 py-3 placeholder-gray-600"
              />
            </div>

            <button className="primary-btn tracking-wider uppercase">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container"></div>
      </section>
    </>
  );
};

export default page;
