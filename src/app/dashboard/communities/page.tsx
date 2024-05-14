import Spinner from "@/components/shared/Spinner";
import CommunityList from "@/components/shared/communities/CommunityList";
import { Suspense } from "react";

const CommunitiesPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <CommunityList query="" />
    </Suspense>
  );
};

export default CommunitiesPage;
