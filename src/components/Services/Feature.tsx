import { FaTablets } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { HiLibrary } from "react-icons/hi";
import { IoLibrary } from "react-icons/io5";
import { MdModelTraining, MdOutlineLunchDining } from "react-icons/md";

const features = [
  {
    title: "E-Books and Family Literacy Project",
    description:
      "Our E-Books initiative aims to enhance literacy by providing access to digital reading materials. This project includes the development of culturally relevant content that resonates with the local community, ensuring that children can relate to what they read.",
    icon: IoLibrary,
  },
  {
    title: "Provision of Tablets",
    description:
      "To empower children with technological skills, we provide tablets equipped with educational resources. This initiative not only fosters digital literacy but also enables access to a wealth of information and learning opportunities.",
    icon: FaTablets,
  },
  {
    title: "Warm Lunch Program",
    description:
      "Understanding that nutrition plays a crucial role in learning, our warm lunch program provides meals to underprivileged students. This initiative not only improves children's health but also enhances their ability to participate in educational and recreational activities effectively.",
    icon: MdOutlineLunchDining,
  },
  {
    title: "Community and School Libraries",
    description:
      "We establish community and school libraries to ensure that children have access to reading materials. These libraries are equipped with books in various languages and provide a safe space for children to develop their reading skills.",
    icon: HiLibrary,
  },
  {
    title: "Professional Development Training",
    description:
      "We offer training programs for teachers and librarians to improve literacy rates. These programs equip educators with the skills needed to create engaging learning environments, fostering a love for reading among students.",
    icon: MdModelTraining,
  },
  {
    title: "Supporting Local Authors Through the Burt Award",
    description:
      "In collaboration with CODE Canada, this initiative will invite Ethiopian writers to participate in a competition aimed at fostering a love of reading and writing among young adults. The Burt Award will recognize outstanding literary contributions and provide a platform for new voices in Ethiopian literature.",
    icon: FaAward,
  },
];

function Feature() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Our Services
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Everything you need to know about CODE Ethiopia
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            At CODE Ethiopia, you will partner with a dedicated team focused on
            enhancing literacy through innovative programs that transform the
            lives of children and communities.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.title} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      aria-hidden='true'
                      className='h-6 w-6 text-white'
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Feature;
