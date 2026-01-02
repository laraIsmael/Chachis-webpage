import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Swedish Massage",
    duration: "60 min",
    price: "$80",
    description: "A gentle massage to relax your muscles.",
    imageUrl: "/images/swedish.jpg",
  },
  {
    title: "Cranial Sacral",
    duration: "60 min",
    price: "$150",
    description:
      "a gentle, hands-on technique using light touch to release tension in this system, potentially easing pain, stress, headaches, fibromyalgia, and improving sleep by restoring normal fluid flow and nervous system function.",
    imageUrl: "/images/deep-tissue.jpg",
  },
];

<div className="grid md:grid-cols-3 gap-4">
  {services.map((service) => (
    <ServiceCard key={service.title} {...service} />
  ))}
</div>;
