import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetails from "./ServiceDetails";
import { services } from "../../../data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found | Isha Sojitra" };
  }

  return {
    title: `${service.title} | Isha Sojitra`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetails service={service} />;
}
