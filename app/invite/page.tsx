import InvitePage from "@/components/InvitePage";

export default async function Page(props: PageProps<"/invite">) {
  const searchParams = await props.searchParams;
  const name =
    typeof searchParams?.name === "string" ? searchParams.name.trim() : "";
  const withFamily = searchParams?.family === "true";

  return <InvitePage name={name} withFamily={withFamily} />;
}
