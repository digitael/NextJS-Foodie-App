import Link from 'next/link';

export default function MealDetailsPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Mail details</h1>
      <p>
        <Link className='navLink' href={'..'}>
          Home
        </Link>
      </p>
    </main>
  );
}
