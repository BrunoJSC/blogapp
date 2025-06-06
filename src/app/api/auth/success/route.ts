import { prisma } from "@/lib/prisma";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {NextResponse} from "next/server";

export async function GET() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if(!user || user == null || !user.id) {
    throw new Error("Usuário não encontrado");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      kindeId: user.id
    }
  });

  if(!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        kindeId: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
      }
    })
  }

  return NextResponse.redirect("http://localhost:3000");
}