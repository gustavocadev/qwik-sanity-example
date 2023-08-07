import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { QPortableText } from '~/integrations/react/portabletext';
import { getPage } from '~/lib/sanity.queries';

export const usePage = routeLoader$(async ({ params }) => {
  const page = await getPage(params.slug);
  return page;
});

export default component$(() => {
  const page = usePage();
  return (
    <div>
      <h1 class="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.value.title}
      </h1>

      <div class="text-lg text-gray-700 mt-10">
        <QPortableText value={page.value.content} />
      </div>
    </div>
  );
});
