import Image from "next/image";

const Cta = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <div>
        <Image
          src={"/images/cta-img.png"}
          alt={"cta image"}
          width={400}
          height={400}
          className="h-full object-cover"
        />
      </div>
      <div className="bg-primary-600 w-full p-16 text-white">
        <h2 className="title max-w-xl">
          Get Started Today Virtual or In Person Appointments Available
        </h2>
        <button className="secondary-btn mt-11 rounded-2xl bg-white font-semibold text-black/80 transition-colors hover:bg-white/90 lg:mt-14">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Cta;
