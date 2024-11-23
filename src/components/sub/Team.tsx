import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberType {
  name: string
  role: string
  image: string;
}

export const teamMembers: TeamMemberType[] = [
  {
    name: 'James Nduku',
    role: 'Marketing Coordinator',
    image: '/person1.png',
  },
  {
    name: 'Joseph Munyambu',
    role: 'Nursing Assistant',
    image: '/person2.png',
  },
  {
    name: 'Joseph Ngumbau',
    role: 'Medical Assistant',
    image: '/person3.png',
  },
  {
    name: 'Erick Kipkemboi',
    role: 'Web Designer',
    image: '/person4.png',
  },
  {
    name: 'Stephen Kerubo',
    role: 'President of Sales',
    image: '/person5.png',
  },
  {
    name: 'John Leboo',
    role: 'Dog Trainer',
    image: '/person6.png',
  },
];

const TeamMember = ({ name, role, image}: TeamMemberType) => {
  return (
    <div className="flex flex-col items-center bg-[#F7F7F7] p-6 rounded-lg ">
      <Image src={image}
        alt={name}
        width={80}
        height={80}
        className="object-cover mb-4" />

      <h3 className="text-xl font-semibold text-black">{name}</h3>
      <p className="text-black mb-4">{role}</p>
      <div className="flex space-x-4 text-black">
        <Link href="" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.svg" alt="linkedin" width={18} height={18} />
        </Link>
        <Link href="" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter.svg" alt="twitter" width={18} height={18} />
        </Link>
        <Link href="" target="_blank" rel="noopener noreferrer">
          <Image src="/vector.svg" alt="vector" width={18} height={18} />
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
