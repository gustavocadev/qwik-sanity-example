import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, Link } from '@builder.io/qwik-city';
import { getProjects } from '~/lib/sanity.queries';

export const useProjects = routeLoader$(async () => {
  const projects = await getProjects();

  return projects;
});

export default component$(() => {
  const projects = useProjects();
  console.log(projects.value);
  return (
    <>
      <div>
        <h1 class="text-7xl font-extrabold">
          Hello I&apos;m
          <span class="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {' '}
            Kapehe!
          </span>
        </h1>
        <p class="mt-3 text-xl text-gray-600">
          Aloha everyone! Check out my projects!
        </p>
        <h2 class="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

        <div class="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.value.map((project) => (
            <Link
              href={`/projects/${project.slug}/`}
              key={project._id}
              class="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  class="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div class="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent py-2">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
