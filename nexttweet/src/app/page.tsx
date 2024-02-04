import { sql } from "@vercel/postgres";
import LoginPage from "../pages/login"


export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {

  

  return (
   <>
    <LoginPage/>
   </>
  );
}