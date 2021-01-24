import { Link } from "components/Link";
import { useRouter } from "next/router";
import { Separator } from "./Separator";
import { useBreadcrumbs } from "./useBreadcrumbs";

export const Breadcrumbs = () => {
  const router = useRouter();
  const breadcrumbs = useBreadcrumbs(router);

  if (!breadcrumbs.length) {
    return null;
  }

  const currentRoute = breadcrumbs.pop();

  return (
    <nav className="bg-grey-light w-full my-5">
      <ol className="flex flex-wrap">
        <li className="inline">
          <Link href="/" className="font-bold">
            Home
          </Link>
        </li>
        <Separator />
        {breadcrumbs.map(({ href, name }) => (
          <li key={href}>
            <Link href={href} className="font-bold">
              {name}
            </Link>
          </li>
        ))}

        {breadcrumbs.length !== 0 && <Separator />}
        <li>{currentRoute?.name}</li>
      </ol>
    </nav>
  );
};
