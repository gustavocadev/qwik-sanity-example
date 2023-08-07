import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { QPortableText } from '~/integrations/react/portabletext';
import { getProject } from '~/lib/sanity.queries';

export const useProject = routeLoader$(({ params }) => {
  const projectParam = params.project;
  const project = getProject(projectParam);

  return project;
});

export default component$(() => {
  const project = useProject();
  return (
    <div>
      <header class="flex items-center justify-between">
        <h1 class="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.value.name}
        </h1>
        <a
          href={project.value.url}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>
      <div class="text-lg text-gray-700 mt-10">
        <QPortableText value={project.value.content} />
      </div>

      <img
        src={project.value.image}
        alt={project.value.name}
        width={1920}
        height={1280}
        class="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
});
