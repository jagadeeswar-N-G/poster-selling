import Wrapper from "@/components/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, ShieldCheck, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your posters delivered is second and download them",
  },
  {
    name: "High Quality",
    Icon: ShieldCheck,
    description: "we are not compramising on the quality of the Product",
  },
  {
    name: "Natural",
    Icon: Sprout,
    description: "We have contributing to the Better World by Donating",
  },
];
export default function Home() {
  return (
    <div>
      <Wrapper>
        <div className="py-20 mx-auto text-center flex flex-col item-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Your marketplace for high-quality{" "}
            <span className="text-yellow-500">Posters</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to our vibrant online marketplace, the ultimate destination
            for art enthusiasts and decor aficionados alike! Step into a world
            where creativity knows no bounds, and expression takes center stage.
            Welcome to Space posters, your go-to poster selling website.
          </p>
          <div className="flex flex-row gap-4 mt-6 items-center justify-center">
            <Link href="/products" className={buttonVariants()}>
              Brows Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </Wrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <Wrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
