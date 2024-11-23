import TeamMember, { teamMembers } from "./sub/Team";

export default function Team() {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="text-center mb-12 mx-4 lg:mx-0">
        <h2 className="text-3xl font-bold text-black mb-4">Our Team</h2>
        <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
