import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { usePages } from '~/routes/layout';

export const Navbar = component$(() => {
  const pages = usePages();

  console.log(pages.value);
  return (
    <header class="flex items-center justify-between">
      <Link
        href="/"
        class="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
      >
        Kapehe
      </Link>
      <div class="flex items-center gap-5 text-sm text-gray-600">
        {pages.value.map((page) => (
          <Link href={`/${page.slug}/`} key={page._id} class="hover:underline">
            {page.title}
          </Link>
        ))}
      </div>
    </header>
  );
});
