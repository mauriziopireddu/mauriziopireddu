import { toSentenceCase } from "lib/utils";
import { NextRouter } from "next/router";
import { useState, useEffect } from "react";

interface Breadcrumb {
  name: string;
  href: string;
}

export const useBreadcrumbs = (router: NextRouter) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const path = router.asPath.split("/").filter((subPath) => subPath.length);

    const pathArray = path.map((subPath, index) => ({
      name: toSentenceCase(subPath, "-"),
      href: "/" + path.slice(0, index + 1).join("/"),
    }));

    setBreadcrumbs(pathArray);
  }, [router]);

  return breadcrumbs;
};
