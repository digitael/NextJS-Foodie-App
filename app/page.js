import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Time to get started!</h1>
      <p>
        <Link className='navLink' href={'./community'}>
          Community
        </Link>
      </p>
      <p>
        <Link className='navLink' href={'./meals'}>
          Share Meal
        </Link>
      </p>
      <p>
        <Link className='navLink' href={'./meals/share'}>
          Share
        </Link>
      </p>
    </main>
  );
}
