import Link from "next/link";

const getData = async () => {
  try {
    const users = await fetch("http://localhost:5000/api/v1/users", {
      cache: "no-cache",
    });
    const data = await users.json();
    return data.users;
  } catch (error) {
    throw error;
  }
};

type User = {
  id: number;
  name: string;
};

const ServerComp = async () => {
  const data: User[] = await getData();

  console.log("Data: ", data);

  return (
    <section className="p-4">
      <div className="mb-10">
        {data?.map((user) => (
          <div key={user.id}>
            <h1 className="text-3xl">{user.name}</h1>
          </div>
        ))}
      </div>

      <Link href="/" className="p-4 border bg-white text-black rounded-md">
        Go Home
      </Link>
    </section>
  );
};

export default ServerComp;
