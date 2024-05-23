import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>This is the Meals Page</h1>
      <p>
        <Link className='navLink' href={'..'}>
          Home
        </Link>
      </p>
    </main>
  );
}
