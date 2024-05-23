import Link from 'next/link';
export default function CommunityPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>This is the Community page</h1>
      <p>
        <Link className='navLink' href={'..'}>
          Home
        </Link>
      </p>
    </main>
  );
}
