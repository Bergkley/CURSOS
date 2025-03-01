import { getUserByEmail } from "@/actions";
import { auth } from "auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/ProfileForm";
import getSession from "@/utils/getSession";


export default async function UserProfile() {
  const session = await getSession();

  if (!session || !session.user?.email) return redirect(`/`);

  const user = await getUserByEmail(session.user.email);

  if (!user) {
    return redirect(`/`);
  }

  return (
    <div className="w-[35rem] mx-auto my-10 p-4">
      <h1 className="text-[2rem] leading-10 font-semibold text-center">
        Perfil de {user.name}
      </h1>

      {user.image && (
        <div className="w-full flex justify-center my-6">
          <Image
            src={user.image}
            alt={`Imagem de perfil de ${user.name}`}
            className="w-80 h-80 p-4 object-cover"
            width={320}
            height={320}
          />
        </div>
      )}

      <ProfileForm user={user} />
    </div>
  );
}
