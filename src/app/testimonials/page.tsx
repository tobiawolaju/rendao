import { TestimonialCard } from '@/components/TestimonialCard';

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center my-8 uppercase">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <TestimonialCard
  quote="This platform saved my life."
  author="A. Victim"
  imageUrl="/pfp/victim.png"
/>
<TestimonialCard
  quote="I'm proud to be a sponsor."
  author="B. Sponsor"
  imageUrl="/pfp/sponsor.png"
/>
<TestimonialCard
  quote="Direct impact, no middlemen. This is the future."
  author="C. Donor"
  imageUrl="/pfp/donor.png"
/>

      </div>
    </div>
  );
}
