export default function Home() {
  return null
}

export async function getServerSideProps(context) {
  const cookies = context.req.cookies;
  const destination = cookies.access_token ? '/dashboard' : '/login';
  return {
    redirect:{
      destination,
      permanent:false
    }
  }
}
