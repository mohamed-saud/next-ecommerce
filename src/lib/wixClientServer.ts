import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

const wixClientServer = async () => {
  let refreshToken;
  try {
    refreshToken = JSON.parse(cookies().get("refreshToken")?.value || "{}");
    console.log(refreshToken);
  } catch (err) {
    console.log(err);
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: {
          value: "",
          expiresAt: 0,
        },
      },
    }),
  });
  return wixClient;
};
export default wixClientServer;
